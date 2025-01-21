"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ApiOverview() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">API Name</Label>
            <Input id="name" placeholder="My Awesome API" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="baseUrl">Base URL</Label>
            <Input id="baseUrl" placeholder="https://api.example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">API Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select API type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rest">REST</SelectItem>
                <SelectItem value="graphql">GraphQL</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your API..."
              className="min-h-[100px]"
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">OpenAPI Specification</h3>
        <pre className="bg-secondary p-4 rounded-lg overflow-auto max-h-[300px]">
          {JSON.stringify({
            openapi: "3.0.0",
            info: {
              title: "My API",
              version: "1.0.0",
            },
            paths: {},
          }, null, 2)}
        </pre>
      </Card>
    </div>
  );
}