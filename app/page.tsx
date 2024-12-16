import ExamplesTabs from "@/components/examples/examples-tabs";
import ThemeSidebar from "@/components/theme-sidebar";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Shadcn/UI theme generator",
  description:
    "Build highly customizable themes for Shadcn UI projects with ease.",
};

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
