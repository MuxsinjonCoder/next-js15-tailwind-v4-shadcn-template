"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart showing the most active users";

const chartData = [
  { username: "johndoe", posts: 186, messages: 80 },
  { username: "janedoe", posts: 305, messages: 200 },
  { username: "user123", posts: 237, messages: 120 },
  { username: "maxdev", posts: 73, messages: 190 },
  { username: "codeguru", posts: 209, messages: 130 },
  { username: "pixelmaster", posts: 214, messages: 140 },
];

const chartConfig = {
  posts: {
    label: "Posts",
    color: "var(--color-chart-2)",
  },
} satisfies ChartConfig;

export function TopActiveUsers() {
  return (
    <Card className="bg-card text-card-foreground rounded-xl shadow-md transition-colors duration-300">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <CardTitle className="text-base md:text-lg font-semibold">
            Top Active Users
          </CardTitle>
        </div>
        <CardDescription className="text-sm md:text-base text-muted-foreground">
          Based on number of posts
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-2 overflow-x-auto">
        <ChartContainer config={chartConfig}>
          <BarChart
            width={600}
            height={300}
            data={chartData}
            layout="vertical"
            margin={{ top: 0, right: 16, left: 0, bottom: 0 }}
          >
            <CartesianGrid horizontal={false} strokeDasharray="3 3" />
            <YAxis
              dataKey="username"
              type="category"
              tickLine={false}
              axisLine={false}
              hide
            />
            <XAxis
              type="number"
              tickLine={false}
              axisLine={false}
              className="text-[10px] md:text-sm fill-muted-foreground"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="posts"
              layout="vertical"
              fill="var(--color-chart-2)"
              radius={[4, 4, 4, 4]}
              barSize={28}
            >
              <LabelList
                dataKey="username"
                position="insideLeft"
                className="fill-background text-[11px] md:text-sm font-medium"
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
