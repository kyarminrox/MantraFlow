"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useApiFormStore, DatabaseType } from "@/store/api-form";

const formSchema = z.object({
  databaseType: z.enum(["postgresql", "mongodb", "mysql", "none"] as const),
});

export function DatabaseForm() {
  const { formData, updateFormData, setStep } = useApiFormStore();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      databaseType: formData.databaseType,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    updateFormData({ databaseType: values.databaseType as DatabaseType });
    setStep(3);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="databaseType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Database Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-2 gap-4"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="postgresql" />
                    </FormControl>
                    <FormLabel className="font-normal">PostgreSQL</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="mongodb" />
                    </FormControl>
                    <FormLabel className="font-normal">MongoDB</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="mysql" />
                    </FormControl>
                    <FormLabel className="font-normal">MySQL</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">No Database</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={() => setStep(1)}>
            Previous
          </Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
}