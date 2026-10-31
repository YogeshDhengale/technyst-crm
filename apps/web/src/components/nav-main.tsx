"use client";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@technyst-crm/ui/components/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@technyst-crm/ui/components/collapsible";
import { cn } from "cn";
import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { navMenu } from "@/lib/constants";

export function NavMain() {
  const pathname = usePathname();
  const { setOpenMobile, isMobile } = useSidebar();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile) {
      setOpenMobile(false);
    }
    // Call the original onClick if it exists
    return event;
  };
  return (
    <SidebarGroup>
      <SidebarMenu>
        {navMenu.map((item) => {
          const isActive =
            pathname === item.url || pathname.startsWith(`${item.url}/`);
          return !item.items?.length ? (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                render={<Link href={item.url as Route} onClick={handleClick} />}
                isActive={isActive}
              >
                {item.icon && <item.icon />}
                <span className={cn("text-sm font-bold")}>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ) : (
            <Collapsible
              key={item.title}
              render={<SidebarMenuItem />}
              className="group/collapsible"
            >
              <CollapsibleTrigger
                render={<SidebarMenuButton isActive={isActive} />}
              >
                {item.icon && <item.icon />}
                <span className={cn("text-sm font-bold")}>{item.title}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        render={<Link href={subItem.url as Route} />}
                      >
                        <span>{subItem.title}</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
