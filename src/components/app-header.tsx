"use client";

import { useState } from "react";
import Search from "./shared/search";
import { SidebarTrigger } from "./ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { BellRing, LogOut } from "lucide-react";
import { ModeToggle } from "./shared/toogle-theme";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AppHeader() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex items-center justify-between gap-4 py-2 border-b mb-5">
      <SidebarTrigger />
      <Search setSearchValue={setSearchValue} searchValue={searchValue} />
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-4">
          <Link href={"/user/notifications"}>
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full relative"
            >
              <BellRing className="size-5" />
              <Badge
                className="rounded-full absolute -top-2 -right-3 text-[10px] py-0.5 px-1"
                variant="destructive"
              >
                79
              </Badge>
            </Button>
          </Link>
          <ModeToggle />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="cursor-pointer">
              <AvatarImage src="/defaults/default-user.png" />
              <AvatarFallback>MM</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>
              <div className="flex items-center gap-2">
                <Image
                  alt="default user"
                  src={"/defaults/default-user.png"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="text-sm font-medium leading-tight line-clamp-2">
                  Muxsinjon Maxsudovich
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/user/profile" className="w-full">
                Profile
              </Link>
            </DropdownMenuItem>
            <div className="flex flex-row items-center justify-between gap-2 lg:hidden px-2 mt-2">
              <Link href={"/user/notifications"}>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full relative"
                >
                  <BellRing className="size-5" />
                  <Badge
                    className="rounded-full absolute -top-1 -right-2 text-[10px] py-0.5 px-1"
                    variant="destructive"
                  >
                    79
                  </Badge>
                </Button>
              </Link>
              <ModeToggle />
            </div>
            <DropdownMenuItem className="mt-4">
              <Button
                variant="destructive"
                className="w-full flex justify-between"
              >
                Logout <LogOut className="size-4 text-white" />
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
