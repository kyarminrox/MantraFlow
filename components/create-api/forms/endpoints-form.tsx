"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useApiFormStore } from "@/store/api-form";
import { Trash2 } from "lucide-react";

const endpointSchema = z.object({
  method: z.enum(["GET", "POST", "PUT", "DELETE", "PATCH"]),
  path: z.string().min(1, "Path is required"),
  description: z.string(),
});

export function EndpointsForm() {
  const { formData, updateFormData, setStep } = useApiFormStore();
  const [endpoints, setEndpoints] = useState(formData.endpoints);
  
  const form = useForm<z.infer<typeof endpointSchema>>({
    resolver: zodResolver(endpointSchema),
    defaultValues: {
      method: "GET",
      path: "",
      description: "",
    },
  });

  function addEndpoint(values: z.infer<typeof endpointSchema>) {
    const newEndpoints = [...endpoints, values];
    setEndpoints(newEndpoints);
    form.reset();
  }

  function removeEndpoint(index: number) {
    setEndpoints(endpoints.filter((_, i) => i !== index));
  }

  function onNext() {
    updateFormData({ endpoints });
    setStep(4);
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {endpoints.map((endpoint, index) => (
          <div key={index} className="flex items-center space-x-2 rounded-lg border p-4">
            <span className="font-mono text-sm">{endpoint.method}</span>
            <span className="font-mono text-sm flex-1">{endpoint.path}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeEndpoint(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(addEndpoint)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="method"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Method</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="GET">GET</SelectItem>
                      <SelectItem value="POST">POST</SelectItem>
                      <SelectItem value="PUT">PUT</SelectItem>
                      <SelectItem value="DELETE">DELETE</SelectItem>
                      <SelectItem value="PATCH">PATCH</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="path"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Path</FormLabel>
                  <FormControl>
                    <Input placeholder="/users" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Get all users" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Add Endpoint</Button>
        </form>
      </Form>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setStep(2)}>
          Previous
        </Button>
        <Button onClick={onNext}>Next</Button>
      </div>
    </div>
  );
}