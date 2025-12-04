import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/navigation/Sidebar";
import BrandSidebar from "@/components/navigation/BrandSidebar";
import AdminSidebar from "@/components/navigation/AdminSidebar";
import TopBar from "@/components/navigation/TopBar";
import AdminTopBar from "@/components/navigation/AdminTopBar";
import BrandTopBar from "@/components/navigation/BrandTopBar";

export const metadata: Metadata = {
  title: "Hushh - Privacy-Preserving User Data Vault",
  description: "Earn money by sharing your data signals while keeping your raw data private",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Sidebar />
        <BrandSidebar />
        <AdminSidebar />
        <TopBar />
        <AdminTopBar />
        <BrandTopBar />
        <div className="min-h-screen pb-20 md:pb-0">{children}</div>
      </body>
    </html>
  );
}

