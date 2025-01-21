"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSidebarStore } from "@/store/sidebar";
import {
  LayoutDashboard,
  Code2,
  TestTube2,
  Rocket,
  Command,
  Menu,
  ChevronLeft,
} from "lucide-react";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    color: "text-blue-500",
  },
  {
    title: "Workspace",
    href: "/workspace",
    icon: Code2,
    color: "text-green-500",
  },
  {
    title: "Testing",
    href: "/testing",
    icon: TestTube2,
    color: "text-yellow-500",
  },
  {
    title: "Deployment",
    href: "/deployment",
    icon: Rocket,
    color: "text-purple-500",
  },
];

export function Navigation() {
  const pathname = usePathname();
  const { isOpen, toggle } = useSidebarStore();
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="md:hidden"
              size="icon"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex"
              onClick={toggle}
            >
              <ChevronLeft
                className={cn("h-4 w-4 transition-transform", !isOpen && "rotate-180")}
              />
            </Button>
            <Link href="/" className="flex items-center space-x-2">
              <Command className="h-6 w-6" />
              <span className={cn("font-bold", !isOpen && "md:hidden")}>
                API Manager
              </span>
            </Link>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex"
              onClick={() => {
                const e = new KeyboardEvent("keydown", {
                  key: "k",
                  metaKey: true,
                });
                document.dispatchEvent(e);
              }}
            >
              <Command className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-14 z-50 h-[calc(100vh-3.5rem)] border-b bg-background md:hidden"
          >
            <ScrollArea className="h-full py-6">
              <nav className="space-y-2 px-4">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setShowMobileMenu(false)}
                      className={cn(
                        "flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent",
                        pathname === item.href
                          ? "bg-accent"
                          : "text-muted-foreground"
                      )}
                    >
                      <Icon className={cn("h-4 w-4", item.color)} />
                      <span>{item.title}</span>
                    </Link>
                  );
                })}
              </nav>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={cn(
          "fixed left-0 top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-64 border-r bg-background transition-transform md:block",
          !isOpen && "-translate-x-64"
        )}
      >
        <ScrollArea className="h-full py-6">
          <nav className="space-y-2 px-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                    pathname === item.href
                      ? "bg-accent"
                      : "text-muted-foreground"
                  )}
                >
                  <Icon className={cn("h-4 w-4", item.color)} />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </ScrollArea>
      </div>
    </>
  );
}