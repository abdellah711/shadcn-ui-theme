"use client";
import ExamplesTabs from "@/components/examples/examples-tabs";
import ThemeSidebar from "@/components/theme-sidebar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex">
      <ThemeSidebar />
      <Separator
        orientation="vertical"
        className="self-stretch min-h-screen 2xl:mx-3"
      />
      <ExamplesTabs />
    </div>
  );
}
