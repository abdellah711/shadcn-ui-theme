"use client";
import { transformStateToCssVariables } from "@/lib/utils";
import { useThemeState } from "@/stores/use-theme-state";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Tabs, TabsContent } from "../ui/tabs";
import { CardsExample } from "./cards";
import { DashboardExample } from "./dashboard";
import { SidebarExample } from "./sidebar";

export const TABS = [
  {
    value: "dashboard",
    label: "Dashboard",
    component: DashboardExample,
  },
  {
    value: "cards",
    label: "Cards",
    component: CardsExample,
  },
  {
    value: "sidebar",
    label: "Sidebar",
    component: SidebarExample,
  },
] as const;

export type Tab = (typeof TABS)[number]["value"];

export default function ExamplesTabs() {
  const { theme: mode } = useTheme();
  const isDark = mode === "dark";
  const theme = useThemeState((state) => state.theme);
  return (
    <Tabs className="w-full p-5 max-w-7xl mx-auto" defaultValue="dashboard">
      <TabsList className="py-3">
        {TABS.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} asChild>
            <Button
              variant="ghost"
              className="text-muted-foreground data-[state=active]:text-primary data-[state=active]:font-semibold"
            >
              {tab.label}
            </Button>
          </TabsTrigger>
        ))}
      </TabsList>

      <div
        style={Object.fromEntries(transformStateToCssVariables(theme, isDark))}
        className="bg-background border border-border rounded-md origin-top relative overflow-hidden"
      >
        {TABS.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <tab.component />
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
