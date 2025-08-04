"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description =
  "A visually enhanced donut chart showing website visitors grouped by age range.";

const chartData = [
  { ageGroup: "1–18", visitors: 134, fill: "#84cc16" }, // Lime Green
  { ageGroup: "18–24", visitors: 210, fill: "#0ea5e9" }, // Sky Blue
  { ageGroup: "24–36", visitors: 328, fill: "#6366f1" }, // Indigo
  { ageGroup: "36–50", visitors: 247, fill: "#f97316" }, // Orange
  { ageGroup: "50+", visitors: 193, fill: "#f43f5e" }, // Rose Red
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  "1–18": {
    label: "1–18",
    color: "#84cc16",
  },
  "18–24": {
    label: "18–24",
    color: "#0ea5e9",
  },
  "24–36": {
    label: "24–36",
    color: "#6366f1",
  },
  "36–50": {
    label: "36–50",
    color: "#f97316",
  },
  "50+": {
    label: "50+",
    color: "#f43f5e",
  },
} satisfies ChartConfig;

export function VisitorsByAge() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-xl font-bold">
          Website Visitors by Age Group
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Data collected from January to June 2024
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] w-full"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="ageGroup"
              innerRadius={60}
              strokeWidth={5}
              labelLine={false}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-sm"
                        >
                          Total Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
