"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useApiFormStore } from "@/store/api-form";
import { BasicInfoForm } from "./forms/basic-info-form";
import { AuthenticationForm } from "./forms/authentication-form";
import { DatabaseForm } from "./forms/database-form";
import { EndpointsForm } from "./forms/endpoints-form";
import { ReviewForm } from "./forms/review-form";

export function CreateApiDialog() {
  const { isOpen, setOpen, step, setStep, resetForm } = useApiFormStore();

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        resetForm();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [setOpen, resetForm]);

  return (
    <Dialog 
      open={isOpen} 
      onOpenChange={(open) => {
        setOpen(open);
        if (!open) resetForm();
      }}
    >
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Create New API</DialogTitle>
        </DialogHeader>
        
        <Tabs value={String(step)} onValueChange={(value) => setStep(Number(value))}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="0">Basics</TabsTrigger>
            <TabsTrigger value="1">Auth</TabsTrigger>
            <TabsTrigger value="2">Database</TabsTrigger>
            <TabsTrigger value="3">Endpoints</TabsTrigger>
            <TabsTrigger value="4">Review</TabsTrigger>
          </TabsList>
          
          <div className="mt-6 space-y-6">
            <TabsContent value="0">
              <BasicInfoForm />
            </TabsContent>
            <TabsContent value="1">
              <AuthenticationForm />
            </TabsContent>
            <TabsContent value="2">
              <DatabaseForm />
            </TabsContent>
            <TabsContent value="3">
              <EndpointsForm />
            </TabsContent>
            <TabsContent value="4">
              <ReviewForm />
            </TabsContent>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}