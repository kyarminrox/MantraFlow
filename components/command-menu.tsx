"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { LayoutDashboard, Code2, TestTube2, Rocket } from "lucide-react";

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem
            onSelect={() => runCommand(() => router.push("/dashboard"))}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push("/workspace"))}
          >
            <Code2 className="mr-2 h-4 w-4" />
            Workspace
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push("/testing"))}
          >
            <TestTube2 className="mr-2 h-4 w-4" />
            Testing
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push("/deployment"))}
          >
            <Rocket className="mr-2 h-4 w-4" />
            Deployment
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}