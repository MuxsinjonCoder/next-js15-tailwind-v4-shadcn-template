"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

// form schemas
const formSchema = z
  .object({
    oldPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." })
      .max(50, {
        message: "Password must not exceed 50 characters.",
      }),
    newPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." })
      .max(50, {
        message: "Password must not exceed 50 characters.",
      }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." })
      .max(50, {
        message: "Password must not exceed 50 characters.",
      }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export default function ChangePassword() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // handle password update logic here
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="max-w-[300px]">
          <Button onClick={() => setIsOpen(true)}>Change Password</Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
          <DialogDescription>
            Choose a password that's easy to remember and secure. Store it
            somewhere safe if needed.
          </DialogDescription>
        </DialogHeader>
        <div className="my-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="oldPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Old Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showOldPassword ? "text" : "password"}
                          placeholder="Enter your current password"
                          {...field}
                        />
                        <Button
                          type="button"
                          size="icon"
                          className="absolute right-0 top-1/2 -translate-y-1/2"
                          onClick={() => setShowOldPassword(!showOldPassword)}
                        >
                          {showOldPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-sm text-destructive mt-1" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showNewPassword ? "text" : "password"}
                          placeholder="Enter a new password"
                          {...field}
                        />
                        <Button
                          type="button"
                          size="icon"
                          className="absolute right-0 top-1/2 -translate-y-1/2"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-sm text-destructive mt-1" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Must match the new password"
                          {...field}
                        />
                        <Button
                          type="button"
                          size="icon"
                          className="absolute right-0 top-1/2 -translate-y-1/2"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-sm text-destructive mt-1" />
                  </FormItem>
                )}
              />

              <DialogFooter className="flex items-center justify-between gap-5 pt-4">
                <Button
                  className="w-[47%]"
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    form.reset();
                    setIsOpen(false);
                  }}
                >
                  Cancel
                </Button>
                <Button className="w-[47%]" type="submit">
                  Change Password
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
