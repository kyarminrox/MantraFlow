"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AuthConfig() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6">Authentication Settings</h3>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <Label>Authentication Type</Label>
            <RadioGroup defaultValue="none" className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="none" />
                <Label htmlFor="none">No Authentication</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="apiKey" id="apiKey" />
                <Label htmlFor="apiKey">API Key</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="jwt" id="jwt" />
                <Label htmlFor="jwt">JWT</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="oauth2" id="oauth2" />
                <Label htmlFor="oauth2">OAuth 2.0</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4 border-t pt-4">
            <Label>API Key Settings</Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Header Name</Label>
                <Input placeholder="X-API-Key" />
              </div>
              <div className="space-y-2">
                <Label>Key Format</Label>
                <Input placeholder="Bearer {token}" />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}