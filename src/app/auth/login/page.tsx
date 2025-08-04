import LoginForm from "@/components/pages/auth/login-form";
import { Metadata } from "next";

export default function LoginPage() {
  return (
    <>
      <div className="fixed inset-0 z-50">
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-gray-200">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
