"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";

export function EndpointEditor() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Endpoints</h3>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Endpoint
          </Button>
        </div>

        <div className="space-y-6">
          {/* Example Endpoint */}
          <div className="space-y-4 p-4 border rounded-lg">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Method</Label>
                <Select defaultValue="GET">
                  <SelectTrigger>
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
              </div>
              
              <div className="col-span-2 space-y-2">
                <Label>Path</Label>
                <Input placeholder="/users/{id}" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea placeholder="Describe this endpoint..." />
            </div>

            <div className="space-y-2">
              <Label>Request Body Schema (JSON)</Label>
              <Textarea
                className="font-mono"
                placeholder='{
  "type": "object",
  "properties": {
    "name": { "type": "string" }
  }
}'
              />
            </div>

            <div className="flex justify-end">
              <Button variant="destructive" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}