"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useApiFormStore } from "@/store/api-form";

const formSchema = z.object({
  name: z.string().min(1, "API name is required"),
  description: z.string(),
  baseUrl: z.string().url("Must be a valid URL"),
});

export function BasicInfoForm() {
  const { formData, updateFormData, setStep } = useApiFormStore();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: formData.name,
      description: formData.description,
      baseUrl: formData.baseUrl,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    updateFormData(values);
    setStep(1);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>API Name</FormLabel>
              <FormControl>
                <Input placeholder="My Awesome API" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your API's purpose and functionality"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="baseUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Base URL</FormLabel>
              <FormControl>
                <Input placeholder="https://api.example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
}