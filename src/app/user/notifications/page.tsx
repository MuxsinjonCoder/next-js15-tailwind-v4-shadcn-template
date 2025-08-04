import NotificationsList from "@/components/pages/user/notifications/notificataions-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications – UI Components Library",
  description:
    "Explore a versatile set of responsive, accessible, and fully customizable notification components including dialogs, alerts, and more — seamlessly integrated with shadcn/ui.",
  icons: {
    icon: "/logo.png",
  },
};

export default function NotificationsPages() {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Notifications page UI
        </h1>
        <div className="mb-5">
          <NotificationsList />
        </div>
      </div>
    </>
  );
}
