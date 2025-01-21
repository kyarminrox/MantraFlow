"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  PlayCircle,
  GitPullRequest,
  Rocket,
  Activity,
  Clock,
  Users,
  GitBranch,
  AlertCircle,
} from "lucide-react";
import { CreateApiDialog } from "@/components/create-api/create-api-dialog";
import { useApiFormStore } from "@/store/api-form";

export default function DashboardPage() {
  const { setOpen } = useApiFormStore();

  return (
    <div className="container space-y-8 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex space-x-2">
          <Button onClick={() => setOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Create New API
          </Button>
          <Button variant="outline">
            <PlayCircle className="mr-2 h-4 w-4" />
            Run Tests
          </Button>
          <Button variant="outline">
            <GitPullRequest className="mr-2 h-4 w-4" />
            View PRs
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-blue-500" />
            <h2 className="font-semibold">Active APIs</h2>
          </div>
          <p className="mt-2 text-2xl font-bold">12</p>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-green-500" />
            <h2 className="font-semibold">Uptime</h2>
          </div>
          <p className="mt-2 text-2xl font-bold">99.9%</p>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-yellow-500" />
            <h2 className="font-semibold">Total Users</h2>
          </div>
          <p className="mt-2 text-2xl font-bold">1,234</p>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <GitBranch className="h-4 w-4 text-purple-500" />
            <h2 className="font-semibold">Deployments</h2>
          </div>
          <p className="mt-2 text-2xl font-bold">56</p>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <div className="p-4">
            <h2 className="text-xl font-bold">Recent Activity</h2>
          </div>
          <ScrollArea className="h-[300px]">
            <div className="p-4 pt-0">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="mb-4 flex items-center gap-4">
                  <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900">
                    <Activity className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">API Update Deployed</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </Card>

        <Card>
          <div className="p-4">
            <h2 className="text-xl font-bold">System Status</h2>
          </div>
          <ScrollArea className="h-[300px]">
            <div className="p-4 pt-0">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-green-500" />
                    <span>API Gateway</span>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500">
                    Operational
                  </Badge>
                </div>
              ))}
            </div>
          </ScrollArea>
        </Card>
      </div>

      <CreateApiDialog />
    </div>
  );
}