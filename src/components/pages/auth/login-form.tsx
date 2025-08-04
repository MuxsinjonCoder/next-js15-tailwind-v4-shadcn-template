"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Eye, EyeOff, Loader, LogIn } from "lucide-react";
import Link from "next/link";
import ForgotPasswordModal from "./forgot-password-modal";
import { toast } from "sonner";
import { saveState } from "@/config/storage";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Emailni to'g'ri kiriting.",
  }),
  password: z
    .string()
    .min(5, { message: "Parol eng kami 5 ta bo'lishi kerak." }),
});

export default function LoginForm() {
  // states
  const [showPassword, setShowPassword] = useState(false);

  // forms
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // halpers
  const router = useRouter();

  // functions
  function onSubmit(values: z.infer<typeof formSchema>) {
    const submittingData = {
      email: values?.email,
      password: values?.password,
    };

    console.log("submittingData:", submittingData);
  }

  return (
    <>
      <Card className="w-[300px] sm:w-[450px] md:w-[550px] border border-primary py-3 px-0 lg:py-5">
        <CardHeader className="flex items-center flex-col md:flex-row gap-2 md:gap-4 lg:gap-5 md:h-10">
          <CardTitle className="font-bold sm:text-lg lg:text-xl text-nowrap text-primary">
            Tizimga kirish
          </CardTitle>
          <Separator className="hidden md:block" orientation="vertical" />
          <CardDescription className="text-center md:text-left text-xs lg:text-sm sm:w-[90%] md:w-auto">
            Tizimga kirish uchun ro'yxatdan o'tkazilgan email va parolni
            kiritishingiz kerak bo'ladi.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Login</FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-[12px]"
                        type="email"
                        placeholder="muxsincoder@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Ro'yxatdan o'tgan emailingizni kiriting
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel>Parol</FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-[12px]"
                        type={showPassword ? "text" : "password"}
                        placeholder="******"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                    <Button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 top-7"
                      variant={"outline"}
                      size={"icon"}
                    >
                      {showPassword ? (
                        <EyeOff className="size-5" />
                      ) : (
                        <Eye className="size-5" />
                      )}
                    </Button>
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                Tizimga kirish <LogIn className="size-5" />
              </Button>
            </form>
          </Form>
          <div className="flex items-center mt-0 justify-between">
            <ForgotPasswordModal />
            <Link href={"/auth/register"}>
              <Button variant={"link"}>Ro'yxatdan o'tish...</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
