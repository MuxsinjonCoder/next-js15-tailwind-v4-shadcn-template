import { Metadata } from "next";
import ChangePassword from "./update-password";
import ProfileUpdate from "./profile-update";

export const metadata: Metadata = {
  title: "Profile – UI Components Library",
  description:
    "Manage and customize your user profile with responsive and accessible components. Built using shadcn/ui for seamless integration and great user experience.",
  icons: {
    icon: "/logo.png",
  },
};

export default function ProfilePage() {
  return (
    <>
      <div>
        <div className="flex flex-col items-start md:flex-row md:items-center justify-between gap-5 mb-5">
          <h1 className="text-2xl font-bold">Profile page</h1>
          <ChangePassword />
        </div>
        <ProfileUpdate />
      </div>
    </>
  );
}
