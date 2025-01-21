import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Command, Rocket, Shield, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              API Development.{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Reimagined.
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Build, test, and deploy APIs with a modern developer experience.
              Streamlined workflow, powerful tools, beautiful interface.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="/dashboard">
              <Button size="lg" className="hover:shadow-lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
              <Command className="h-6 w-6 text-blue-500" />
              <h2 className="text-xl font-bold">Command-Driven</h2>
              <p className="text-sm text-muted-foreground">
                Quick actions with Cmd+K, just like your favorite editor.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
              <Zap className="h-6 w-6 text-yellow-500" />
              <h2 className="text-xl font-bold">Lightning Fast</h2>
              <p className="text-sm text-muted-foreground">
                Built for speed with Next.js and React Server Components.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
              <Shield className="h-6 w-6 text-green-500" />
              <h2 className="text-xl font-bold">Secure by Default</h2>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade security with role-based access control.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
              <Rocket className="h-6 w-6 text-purple-500" />
              <h2 className="text-xl font-bold">One-Click Deploy</h2>
              <p className="text-sm text-muted-foreground">
                Deploy to production with confidence and zero downtime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}