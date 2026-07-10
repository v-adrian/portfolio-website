import type { ReactNode } from "react";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="mx-auto max-w-6xl">
      <Header />
      <main className="mx-4">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
