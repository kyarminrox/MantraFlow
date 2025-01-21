"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  Code2,
  GitBranch,
  GitPullRequest,
  History,
  Lock,
  Settings,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    title: "API Overview",
    href: "#overview",
    icon: Code2,
  },
  {
    title: "Authentication",
    href: "#auth",
    icon: Lock,
  },
  {
    title: "Security",
    href: "#security",
    icon: Shield,
  },
  {
    title: "Version Control",
    href: "#git",
    icon: GitBranch,
    children: [
      {
        title: "Pull Requests",
        href: "#prs",
        icon: GitPullRequest,
      },
      {
        title: "History",
        href: "#history",
        icon: History,
      },
    ],
  },
  {
    title: "Settings",
    href: "#settings",
    icon: Settings,
  },
];

interface WorkspaceNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function WorkspaceNav({ className }: WorkspaceNavProps) {
  const pathname = usePathname();

  return (
    <div className={cn("flex flex-col", className)}>
      <ScrollArea className="flex-1">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Workspace</h2>
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium hover:bg-accent",
                      pathname === item.href
                        ? "bg-accent"
                        : "text-muted-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium hover:bg-accent",
                            pathname === child.href
                              ? "bg-accent"
                              : "text-muted-foreground"
                          )}
                        >
                          <child.icon className="h-4 w-4" />
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}