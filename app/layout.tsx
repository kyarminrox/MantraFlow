import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { CommandMenu } from '@/components/command-menu';
import { Navigation } from '@/components/navigation';
import { Toaster } from '@/components/ui/sonner';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'API Development Management',
  description: 'Modern API Development and Management Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetbrainsMono.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1 bg-background pl-0 pt-14 transition-[padding] duration-300 ease-in-out md:pl-64">
              {children}
            </main>
          </div>
          <CommandMenu />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}