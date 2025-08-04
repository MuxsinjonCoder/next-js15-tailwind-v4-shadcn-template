"use client";

import { motion } from "framer-motion";
import { FileX } from "lucide-react";

export default function NoData() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col mx-auto items-center justify-center text-center text-gray-500 py-12"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-gray-100 p-6 rounded-full mb-6"
      >
        <FileX className="h-12 w-12 text-primary" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-xl font-semibold text-gray-700"
      >
        Ma'lumot topilmadi
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-2 text-sm text-gray-500"
      >
        Hozircha hech qanday ma'lumot mavjud emas.
      </motion.p>
    </motion.div>
  );
}
