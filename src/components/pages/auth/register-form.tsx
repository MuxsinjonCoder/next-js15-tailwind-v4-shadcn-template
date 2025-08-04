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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Eye, EyeOff, Loader, MailPlus } from "lucide-react";
import Link from "next/link";
import VerifyRegisterEmail from "./verify-register-email";
import { toast } from "sonner";
import Cookies from "js-cookie";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "To'liq ismingizni kiriting.",
  }),
  email: z.string().min(2, {
    message: "Emailni to'g'ri kiriting.",
  }),
  password: z
    .string()
    .min(5, { message: "Parol eng kami 5 ta bo'lishi kerak." }),
});

export default function RegisterForm() {
  // states
  const [showPassword, setShowPassword] = useState(false);
  const [isVerifyEmailModalOpen, setVerifyEmailModalOpen] = useState(false);
  const [registeringEmail, setRegisteringEmail] = useState("");

  // forms
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // functions
  function onSubmit(values: z.infer<typeof formSchema>) {
    const submittingData = {
      name: String(values?.name),
      email: String(values?.email),
      password: String(values?.password),
    };

    console.log("submittingData:", submittingData);
  }

  return (
    <>
      <Card className="w-[300px] sm:w-[450px] md:w-[550px] border border-primary py-3 px-0 lg:py-5">
        <CardHeader className="flex items-center flex-col md:flex-row gap-2 md:gap-4 lg:gap-5 md:h-12">
          <CardTitle className="font-bold sm:text-lg lg:text-xl text-nowrap text-primary">
            Ro'yxatdan o'tish
          </CardTitle>
          <Separator className="hidden md:block" orientation="vertical" />
          <CardDescription className="text-center md:text-left text-xs lg:text-sm sm:w-[90%] md:w-auto">
            Quyidagi maydomlarni to'ldiring va emailingizga yuborilgan kodni
            tasdiqlang
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>To'liq ismingiz</FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-[12px]"
                        placeholder="Muxsinjon Maxsudovich"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-[12px]"
                        type="email"
                        placeholder="muxsincoder@gmail.com"
                        {...field}
                      />
                    </FormControl>
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
                Ro'yxatdan o'tish <MailPlus className="size-5" />
              </Button>
            </form>
          </Form>
          <div className="flex items-center mt-0 justify-end">
            <Link href={"/auth/login"}>
              <Button variant={"link"}>Ro'yxatdan o'tganman...</Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* verify email */}
      <VerifyRegisterEmail
        email={registeringEmail}
        open={isVerifyEmailModalOpen}
        setOpen={setVerifyEmailModalOpen}
      />
    </>
  );
}
