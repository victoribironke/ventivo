import * as React from "react";
import { ChartNoAxesGantt, Database, Flame } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { IMAGES, PAGES } from "@/constants/constants";

const data = {
  navMain: [
    {
      title: "Dashboard",
      items: [
        {
          title: "Projects",
          url: PAGES.dashboard,
          icon: ChartNoAxesGantt,
        },
      ],
    },
    {
      title: "Create a new project",
      items: [
        {
          title: "Firebase",
          url: "#",
          icon: Flame,
        },
        {
          title: "PostgreSQL",
          url: "#",
          isActive: true,
          icon: Database,
        },
      ],
    },
  ],
};

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar variant="sidebar" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={PAGES.dashboard}>
                <Image
                  src={IMAGES.logo.src}
                  width={IMAGES.logo.w}
                  height={IMAGES.logo.h}
                  alt="Logo"
                  className="size-6"
                />
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Ventivo</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <p className="text-lg font-medium">{item.title}</p>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <div className="flex gap-2">
                            <item.icon size={20} />
                            <Link href={item.url}>{item.title}</Link>
                          </div>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export { AppSidebar };
