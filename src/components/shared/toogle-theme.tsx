"use client";

import * as React from "react";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [selectedTheme, setSelectedTheme] = React.useState("system");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      const initialTheme = storedTheme || "system";
      setSelectedTheme(initialTheme);
      setTheme(initialTheme);
      setMounted(true);
    }
  }, [setTheme]);

  if (!mounted) return (
    <div className="w-[110px] h-10 rounded-full border bg-muted" />
  );

  const handleThemeChange = (value: string) => {
    setSelectedTheme(value);
    setTheme(value);
    localStorage.setItem("theme", value);
  };

  return (
    <Tabs
      value={selectedTheme}
      onValueChange={handleThemeChange}
      className="w-[110px] rounded-full border bg-muted p-0"
    >
      <TabsList className="grid grid-cols-3 gap-1 rounded-full bg-transparent p-0">
        <TabsTrigger
          value="light"
          className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black"
        >
          <Sun className="h-5 w-5" />
        </TabsTrigger>
        <TabsTrigger
          value="dark"
          className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black"
        >
          <Moon className="h-5 w-5" />
        </TabsTrigger>
        <TabsTrigger
          value="system"
          className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black"
        >
          <Laptop className="h-5 w-5" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
