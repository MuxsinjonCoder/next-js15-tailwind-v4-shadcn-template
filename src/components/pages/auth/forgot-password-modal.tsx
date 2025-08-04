"use client";

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
import { CircleArrowRight, Loader } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Emailni to'g'ri kiriting.",
  }),
});

export default function ForgotPasswordModal() {
  const [open, setOpen] = useState(false);

  // forms
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  // functions
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
        <DialogTrigger asChild>
          <Button className="w-fit" onClick={() => setOpen(true)} variant={"link"}>
            Parolni tiklash
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="flex items-center flex-col md:flex-row gap-2 md:gap-4 lg:gap-5 md:h-14">
            <DialogTitle className="font-bold sm:text-lg lg:text-xl text-nowrap text-primary">
              Parolni tiklash
            </DialogTitle>
            <Separator className="hidden md:block" orientation="vertical" />
            <DialogDescription className="text-center md:text-left text-xs lg:text-sm sm:w-[90%] md:w-auto">
              Ro'yxatdan o'tkazgan emailingizni kiriting va parolni olish
              tugmasini bosing va biz parolni emailingizga yuboramiz.
            </DialogDescription>
          </DialogHeader>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
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
                <Button className="w-full" type="submit">
                  Parolni olish <CircleArrowRight className="size-5" />
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
