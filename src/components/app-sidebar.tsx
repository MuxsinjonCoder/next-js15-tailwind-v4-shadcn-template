"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { SidebarData } from "@/constants/sidebar-data";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-4 px-4 py-3">
          <Image src="/logos/logo.png" alt="Logo" width={50} height={50} />
          <Separator orientation="vertical" className="h-10 bg-border" />
          <div className="leading-tight">
            <p className="text-lg font-semibold text-primary">Template</p>
            <p className="text-sm text-muted-foreground">Project Title</p>
          </div>
        </div>
      </SidebarHeader>
      <Separator className="mt-3" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pages label</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="pr-5">
              {SidebarData?.map((sidebar, index) => {
                const path = usePathname();

                let isSidebarItemActive =
                  sidebar?.url === "/"
                    ? path === "/"
                    : path.startsWith(sidebar?.url);

                return (
                  <div key={index}>
                    {sidebar?.subItems ? (
                      <SidebarMenuItem key={sidebar?.subItems[0]?.url}>
                        <Accordion
                          type="single"
                          collapsible
                          defaultValue={
                            sidebar?.subItems?.some((subItem) =>
                              subItem?.url === "/"
                                ? path === "/"
                                : path.startsWith(subItem?.url)
                            )
                              ? sidebar?.title
                              : undefined
                          }
                        >
                          <AccordionItem value={sidebar?.title}>
                            <AccordionTrigger
                              className={`pl-7 mb-2 text-left transition ${
                                sidebar?.subItems?.some((subItem) =>
                                  subItem?.url === "/"
                                    ? path === "/"
                                    : path.startsWith(subItem?.url)
                                )
                                  ? "bg-primary/20 font-semibold text-primary"
                                  : ""
                              }`}
                            >
                              {sidebar?.title}
                            </AccordionTrigger>
                            <AccordionContent>
                              {sidebar?.subItems?.map((subItem) => {
                                const isSidebarSubItemActive =
                                  subItem?.url === "/"
                                    ? path === "/"
                                    : path.startsWith(subItem?.url);

                                return (
                                  <>
                                    <Link
                                      key={subItem?.url}
                                      href={subItem?.url}
                                    >
                                      <Button
                                        className="mb-2 w-[90%]"
                                        variant={
                                          isSidebarSubItemActive
                                            ? "navActive"
                                            : "nav"
                                        }
                                      >
                                        <sidebar.icon /> {subItem?.title}
                                      </Button>
                                    </Link>
                                  </>
                                );
                              })}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </SidebarMenuItem>
                    ) : (
                      <SidebarMenuItem key={sidebar?.url}>
                        <Link href={sidebar?.url}>
                          <Button
                            className="mb-2"
                            variant={isSidebarItemActive ? "navActive" : "nav"}
                          >
                            <sidebar.icon /> {sidebar?.title}
                          </Button>
                        </Link>
                      </SidebarMenuItem>
                    )}
                  </div>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
