import React from "react";
import { Tabs, TabsContent } from "../ui/tabs";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { CardsExample } from "./cards";
import { DashboardExample } from "./dashboard";
import { Button } from "../ui/button";
import { transformStateToCssVariables } from "@/lib/utils";
import { ThemeState } from "@/lib/types";
import { useTheme } from "next-themes";

type Props = {
  theme: ThemeState;
};

export default function ExamplesTabs({ theme }: Props) {
  const { theme: mode } = useTheme();
  const isDark = mode === "dark";

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
