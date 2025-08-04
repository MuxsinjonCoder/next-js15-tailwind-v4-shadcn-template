import { ChartBarStacked, Settings, TableProperties } from "lucide-react";

export const SidebarData = [
  {
    title: "Dashboard",
    url: "/",
    icon: ChartBarStacked,
  },
  {
    title: "Demo tables",
    url: "/demo-tables",
    icon: TableProperties,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    subItems: [
      {
        title: "Profile",
        url: "/user/profile",
      },
      {
        title: "Notifications",
        url: "/user/notifications",
      },
    ],
  },
];
