"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ApiConsoleProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ApiConsole({ className }: ApiConsoleProps) {
  const [method, setMethod] = useState("GET");
  const [endpoint, setEndpoint] = useState("");
  const [response, setResponse] = useState(null);

  const handleSendRequest = () => {
    // Simulate API request
    setResponse({
      status: 200,
      duration: "123ms",
      data: {
        message: "Success",
        timestamp: new Date().toISOString(),
      },
    });
  };

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold mb-4">API Console</h2>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Select value={method} onValueChange={setMethod}>
              <SelectTrigger className="w-[100px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="GET">GET</SelectItem>
                <SelectItem value="POST">POST</SelectItem>
                <SelectItem value="PUT">PUT</SelectItem>
                <SelectItem value="DELETE">DELETE</SelectItem>
                <SelectItem value="PATCH">PATCH</SelectItem>
              </SelectContent>
            </Select>
            <Input
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              placeholder="/api/endpoint"
              className="flex-1"
            />
          </div>
          <Button onClick={handleSendRequest} className="w-full">
            Send Request
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        {response && (
          <Card className="p-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Status: {response.status}</span>
                <span className="text-sm text-muted-foreground">
                  {response.duration}
                </span>
              </div>
              <pre className="bg-secondary p-4 rounded-lg overflow-auto">
                {JSON.stringify(response.data, null, 2)}
              </pre>
            </div>
          </Card>
        )}
      </ScrollArea>
    </div>
  );
}