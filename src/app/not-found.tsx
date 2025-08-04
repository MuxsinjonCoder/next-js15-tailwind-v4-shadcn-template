"use client";

import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="h-[80%] w-full flex flex-col items-center justify-center bg-background text-center p-6">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-muted-foreground mb-2">
        Page Not Found
      </h2>
      <p className="text-muted-foreground mb-6">
        Sorry, the page you are looking for doesn’t exist or has been removed.
      </p>
      <Button onClick={() => router.back()} className="sm:max-w-[20%]">
        <MoveLeft /> Back
      </Button>
    </div>
  );
}
