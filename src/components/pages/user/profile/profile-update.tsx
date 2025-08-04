"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import { useRouter } from "next/navigation";

// form schemas
const formSchema = z.object({
  phone: z
    .string()
    .min(9, {
      message: "Enter a valid phone number.",
    })
    .max(50, { message: "Phone number must not exceed 50 digits." }),
  fullName: z
    .string()
    .min(5, { message: "Full name must be at least 5 characters." })
    .max(50, { message: "Full name must not exceed 50 characters." }),
  email: z.string({ message: "Enter a valid email address." }),
});

export default function ProfileUpdate() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "930981409",
      fullName: "Muxsinjon Maxsudovich",
      email: "muxsincoder@gamil.com",
    },
  });

  const router = useRouter();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // handle profile update logic here
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <span className="text-primary text-xl font-bold">
              {/* {user?.fullName} */}User Name
            </span>
            's profile information
          </CardTitle>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="flex items-center justify-between gap-4 flex-wrap">
              <div className="w-full md:w-[30%]">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your full name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive mt-1" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full md:w-[30%]">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive mt-1" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full md:w-[30%]">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            +998
                          </span>
                          <Input
                            type="text"
                            placeholder="11 222 3344"
                            {...field}
                            value={field.value
                              ?.replace(/\D/g, "")
                              .slice(0, 9)
                              .replace(/(\d{2})(\d{3})(\d{4})/, "$1 $2 $3")}
                            onChange={(e) => {
                              const raw = e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 9);
                              field.onChange(raw);
                            }}
                            className="pl-16"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-sm text-destructive mt-1" />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter className="flex items-center gap-5 w-full md:w-[500px] mt-5">
              <Button type="submit">Save</Button>
              <Button
                type="button"
                variant={"secondary"}
                onClick={() => form.reset()}
              >
                Reset
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </>
  );
}
