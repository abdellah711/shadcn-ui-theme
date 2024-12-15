import { transformStateToCssVariables } from "@/lib/utils";
import { useThemeState } from "@/stores/use-theme-state";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Tabs, TabsContent } from "../ui/tabs";
import { CardsExample } from "./cards";
import { DashboardExample } from "./dashboard";
import { SidebarExample } from "./sidebar";
import { useSelectedTab } from "@/stores/use-selected-tab";

export const TABS = [
  {
    value: "cards",
    label: "Cards",
    component: CardsExample,
  },
  {
    value: "dashboard",
    label: "Dashboard",
    component: DashboardExample,
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
  const { selectedTab, setSelectedTab } = useSelectedTab();
  return (
    <Tabs value={selectedTab} onValueChange={setSelectedTab}>
      <TabsList className="py-3">
        <TabsTrigger value="dashboard" asChild>
          <Button
            variant="ghost"
            className="text-muted-foreground data-[state=active]:text-primary data-[state=active]:font-semibold"
          >
            Dashboard
          </Button>
        </TabsTrigger>
        <TabsTrigger value="cards" asChild>
          <Button
            variant="ghost"
            className="text-muted-foreground data-[state=active]:text-primary data-[state=active]:font-semibold"
          >
            Cards
          </Button>
        </TabsTrigger>
        <TabsTrigger value="sidebar" asChild>
          <Button
            variant="ghost"
            className="text-muted-foreground data-[state=active]:text-primary data-[state=active]:font-semibold"
          >
            Sidebar
          </Button>
        </TabsTrigger>
      </TabsList>

      <div
        style={Object.fromEntries(transformStateToCssVariables(theme, isDark))}
        className="bg-background border border-border rounded-md origin-top relative overflow-hidden"
      >
        <TabsContent value="cards">
          <CardsExample />
        </TabsContent>
        <TabsContent value="dashboard">
          <DashboardExample />
        </TabsContent>
        <TabsContent value="sidebar">
          <SidebarExample />
        </TabsContent>
      </div>
    </Tabs>
  );
}
