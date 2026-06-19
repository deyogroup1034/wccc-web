import type { Metadata } from "next";
import { Lora, Open_Sans } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WCCC",
  description: "WCCC website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${openSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SiteNav />
          <div className="flex flex-1 flex-col">{children}</div>
          <SiteFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
