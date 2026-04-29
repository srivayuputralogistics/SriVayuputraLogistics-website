import { Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import FloatingButtons from "./FloatingButtons";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  const routerState = useRouterState();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [routerState.location.pathname]);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
