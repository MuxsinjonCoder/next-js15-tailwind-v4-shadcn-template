import RegisterForm from "@/components/pages/auth/register-form";
import { Metadata } from "next";

export default function RegisterPage() {
  return (
    <>
      <div className="fixed inset-0 z-50">
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-bl from-white to-gray-200">
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
