"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

export function MiddlewareConfig() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6">Middleware & Security</h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>CORS</Label>
              <p className="text-sm text-muted-foreground">
                Enable Cross-Origin Resource Sharing
              </p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Rate Limiting</Label>
              <p className="text-sm text-muted-foreground">
                Limit request frequency per client
              </p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Request Logging</Label>
              <p className="text-sm text-muted-foreground">
                Log all incoming requests
              </p>
            </div>
            <Switch />
          </div>

          <div className="border-t pt-6">
            <h4 className="font-medium mb-4">Rate Limit Settings</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Requests per minute</Label>
                <Input type="number" placeholder="60" />
              </div>
              <div className="space-y-2">
                <Label>Burst limit</Label>
                <Input type="number" placeholder="100" />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}