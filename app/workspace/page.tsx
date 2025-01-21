"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkspaceNav } from "@/components/workspace/workspace-nav";
import { EndpointEditor } from "@/components/workspace/endpoint-editor";
import { ApiConsole } from "@/components/workspace/api-console";
import { AuthConfig } from "@/components/workspace/auth-config";
import { MiddlewareConfig } from "@/components/workspace/middleware-config";
import { ApiOverview } from "@/components/workspace/api-overview";

export default function WorkspacePage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex h-[calc(100vh-3.5rem)]">
      {/* Left Sidebar - API Navigation */}
      <WorkspaceNav className="w-64 border-r" />

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                <TabsTrigger value="auth">Authentication</TabsTrigger>
                <TabsTrigger value="middleware">Middleware</TabsTrigger>
              </TabsList>
            </div>

            <ScrollArea className="h-[calc(100%-3rem)] mt-4">
              <TabsContent value="overview" className="m-0">
                <ApiOverview />
              </TabsContent>
              
              <TabsContent value="endpoints" className="m-0">
                <EndpointEditor />
              </TabsContent>

              <TabsContent value="auth" className="m-0">
                <AuthConfig />
              </TabsContent>

              <TabsContent value="middleware" className="m-0">
                <MiddlewareConfig />
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </div>
      </div>

      {/* Right Panel - API Console */}
      <ApiConsole className="w-96 border-l" />
    </div>
  );
}