"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useState, useEffect } from "react";
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
import { BadgePlus, Loader, RefreshCw, SearchCheck } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "sonner";
import { saveState } from "@/config/storage";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface VerifyRegisterEmailPropsTypes {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
}

const formSchema = z.object({
  code: z.string().length(6, { message: "Tasdiqlash kodini to'liq kiriting." }),
});

export default function VerifyRegisterEmail({
  email,
  open,
  setOpen,
}: VerifyRegisterEmailPropsTypes) {
  // states
  const [timer, setTimer] = useState(180);
  const [isExpired, setIsExpired] = useState(false);

  // forms
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  // halpers ======= timer
  const router = useRouter();
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (open && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setIsExpired(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [open, timer]);

  useEffect(() => {
    if (open) {
      setTimer(180);
      setIsExpired(false);
      form.reset();
    }
  }, [open, form]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // functions
  function onSubmit(values: z.infer<typeof formSchema>) {
    const submittingData = {
      email: email,
      code: values?.code,
    };

    console.log("submittingData:", submittingData);
  }

  function resendCode() {
    alert("Resend code function is working!!!");
  }

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center space-y-3">
          <DialogTitle className="text-2xl font-bold text-primary">
            Emailni tasdiqlash
          </DialogTitle>
          <DialogDescription className="text-base leading-relaxed">
            <span className="font-bold">{email}</span>
            ga tasdiqlash kodi yuborildi
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="text-center">
            <div
              className={`text-lg font-mono font-bold ${
                timer <= 30 ? "text-red-500" : "text-gray-600"
              }`}
            >
              {formatTime(timer)}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {isExpired ? "Kod muddati tugagan" : "Kod amal qilish muddati"}
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-center block text-base font-medium">
                      Tasdiqlash kodini kiriting
                    </FormLabel>
                    <FormControl>
                      <div className="flex justify-center">
                        <InputOTP
                          maxLength={6}
                          {...field}
                          className="gap-2"
                          disabled={isExpired}
                        >
                          <InputOTPGroup>
                            <InputOTPSlot
                              index={0}
                              className="w-12 h-12 text-xl font-bold border-2 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            />
                            <InputOTPSlot
                              index={1}
                              className="w-12 h-12 text-xl font-bold border-2 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            />
                            <InputOTPSlot
                              index={2}
                              className="w-12 h-12 text-xl font-bold border-2 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            />
                          </InputOTPGroup>
                          <InputOTPSeparator className="text-gray-400" />
                          <InputOTPGroup>
                            <InputOTPSlot
                              index={3}
                              className="w-12 h-12 text-xl font-bold border-2 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            />
                            <InputOTPSlot
                              index={4}
                              className="w-12 h-12 text-xl font-bold border-2 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            />
                            <InputOTPSlot
                              index={5}
                              className="w-12 h-12 text-xl font-bold border-2 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            />
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="space-y-3">
                {!isExpired ? (
                  <Button className="w-full" type="submit">
                    Tasdiqlash <SearchCheck className="size-5" />
                  </Button>
                ) : (
                  <Button className="w-full" type="button" onClick={resendCode}>
                    Kodni qayta yuborish
                    <RefreshCw className="ml-2 h-5 w-5" />
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
