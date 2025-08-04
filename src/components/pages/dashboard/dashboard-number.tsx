"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Bell, Users, ShoppingCart, TrendingUp } from "lucide-react";

const stats = [
  {
    id: 1,
    title: "Daily users",
    value: 1200,
    icon: Users,
    colorFrom: "from-purple-500",
    colorTo: "to-indigo-600",
  },
  {
    id: 2,
    title: "Daily orders",
    value: 850,
    icon: ShoppingCart,
    colorFrom: "from-pink-500",
    colorTo: "to-rose-600",
  },
  {
    id: 3,
    title: "Daily messages",
    value: 430,
    icon: Bell,
    colorFrom: "from-green-500",
    colorTo: "to-emerald-600",
  },
  {
    id: 4,
    title: "Daily earns $",
    value: 9800,
    icon: TrendingUp,
    colorFrom: "from-yellow-400",
    colorTo: "to-orange-500",
  },
];

function CountUp({ end }: { end: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;

      const controls = {
        from: 0,
        to: end,
        duration: 2,
        ease: (t: number) => 1 - Math.pow(1 - t, 2),
      };

      let start: number | null = null;

      function animate(ts: number) {
        if (start === null) start = ts;
        const elapsed = (ts - start) / 1000;
        const progress = Math.min(elapsed / controls.duration, 1);
        const eased = controls.ease(progress);
        setCount(
          Math.floor(controls.from + (controls.to - controls.from) * eased)
        );
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }

      requestAnimationFrame(animate);
    }
  }, [end, isInView]);

  return (
    <span
      ref={ref}
      className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold"
    >
      {count}
    </span>
  );
}

export default function DashboardNumber() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 py-6">
      {stats.map(({ id, title, value, icon: Icon, colorFrom, colorTo }) => (
        <motion.div
          key={id}
          className={`rounded-2xl bg-gradient-to-br ${colorFrom} ${colorTo} shadow-xl transition-transform duration-300`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: id * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="bg-transparent shadow-none border-none">
            <CardContent className="p-2 sm:px-5 md:px-6 flex items-center gap-4 sm:gap-5 md:gap-6">
              <div className="bg-white/20 rounded-full p-3 sm:p-4">
                <Icon className="text-white size-7 sm:size-8 md:size-10" />
              </div>
              <div>
                <h4 className="text-white text-lg sm:text-xl md:text-3xl font-bold tracking-wide">
                  <CountUp end={value} />+
                </h4>
                <p className="text-white/80 text-sm sm:text-base">{title}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
