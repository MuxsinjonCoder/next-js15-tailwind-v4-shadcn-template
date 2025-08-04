"use client";

import { TrendingUp } from "lucide-react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

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

export const description = "A radar chart showing channel user counts";

const chartData = [
  { channel: "DevLife", users: 320 },
  { channel: "Samsung official", users: 280 },
  { channel: "Apple Team", users: 190 },
  { channel: "AI news", users: 360 },
  { channel: "BBC", users: 210 },
  { channel: "TechGlobal", users: 240 },
];

const chartConfig = {
  users: {
    label: "Users",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function UsersVisitedMost() {
  return (
    <Card>
      <CardHeader className="items-center">
        <CardTitle>Channel Activity</CardTitle>
        <CardDescription>
          User participation in top Slack/Telegram channels
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={chartData}>
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <PolarAngleAxis
                dataKey="channel"
                tick={({ payload, x, y, textAnchor }) => {
                  const words = payload.value.split(" ");
                  return (
                    <text
                      x={x}
                      y={y}
                      textAnchor={textAnchor}
                      fill="currentColor"
                      fontSize={10}
                    >
                      {words.map((word: string, index: number) => (
                        <tspan x={x} dy={index === 0 ? 0 : 12} key={index}>
                          {word}
                        </tspan>
                      ))}
                    </text>
                  );
                }}
                tickLine={false}
              />

              <PolarGrid />
              <Radar
                dataKey="users"
                fill="var(--color-users)"
                fillOpacity={0.6}
                dot={{ r: 4, fillOpacity: 1 }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
