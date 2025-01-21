"use client";

import { Button } from "@/components/ui/button";
import { useApiFormStore } from "@/store/api-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function ReviewForm() {
  const { formData, setStep } = useApiFormStore();
  const [githubRepo, setGithubRepo] = useState(formData.githubRepo);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Here you would typically submit the form data
    console.log({ ...formData, githubRepo });
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg border p-4 space-y-4">
        <div>
          <h3 className="font-semibold">Basic Information</h3>
          <p className="text-sm text-muted-foreground">Name: {formData.name}</p>
          <p className="text-sm text-muted-foreground">Base URL: {formData.baseUrl}</p>
          <p className="text-sm text-muted-foreground">Description: {formData.description}</p>
        </div>

        <div>
          <h3 className="font-semibold">Authentication</h3>
          <p className="text-sm text-muted-foreground capitalize">{formData.authType}</p>
        </div>

        <div>
          <h3 className="font-semibold">Database</h3>
          <p className="text-sm text-muted-foreground capitalize">{formData.databaseType}</p>
        </div>

        <div>
          <h3 className="font-semibold">Endpoints</h3>
          <div className="space-y-2">
            {formData.endpoints.map((endpoint, index) => (
              <div key={index} className="text-sm text-muted-foreground">
                <code>{endpoint.method} {endpoint.path}</code>
                <p className="text-xs">{endpoint.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="github">GitHub Repository (Optional)</Label>
          <Input
            id="github"
            placeholder="username/repository"
            value={githubRepo}
            onChange={(e) => setGithubRepo(e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setStep(3)}>
          Previous
        </Button>
        <Button onClick={onSubmit}>Create API</Button>
      </div>
    </div>
  );
}