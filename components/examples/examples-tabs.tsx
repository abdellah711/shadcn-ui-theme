import { transformStateToCssVariables } from "@/lib/utils";
import { useThemeState } from "@/stores/use-theme-state";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Tabs, TabsContent } from "../ui/tabs";
import { CardsExample } from "./cards";
import { DashboardExample } from "./dashboard";

type Props = {};

export default function ExamplesTabs({}: Props) {
  const { theme: mode } = useTheme();
  const isDark = mode === "dark";
  const theme = useThemeState((state) => state.theme);

  return (
    <Tabs defaultValue="cards">
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
      </TabsList>

      <div
        style={Object.fromEntries(transformStateToCssVariables(theme, isDark))}
        className="bg-background border border-border rounded-md origin-top"
      >
        <TabsContent value="cards">
          <CardsExample />
        </TabsContent>
        <TabsContent value="dashboard">
          <DashboardExample />
        </TabsContent>
      </div>
    </Tabs>
  );
}
