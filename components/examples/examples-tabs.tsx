import React from "react";
import { Tabs, TabsContent } from "../ui/tabs";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { CardsExample } from "./cards";
import { DashboardExample } from "./dashboard";
import { Button } from "../ui/button";
import { transformStateToCssVariables } from "@/lib/utils";
import { ThemeState } from "@/lib/types";

type Props = {
  theme: ThemeState;
};

export default function ExamplesTabs({ theme }: Props) {
  return (
    <Tabs defaultValue="cards">
      <TabsList className="py-3">
        <TabsTrigger value="cards" asChild>
          <Button
            variant="ghost"
            className="text-muted-foreground data-[state=active]:text-primary data-[state=active]:font-semibold"
          >
            Cards
          </Button>
        </TabsTrigger>
        <TabsTrigger value="dashboard" asChild>
          <Button
            variant="ghost"
            className="text-muted-foreground data-[state=active]:text-primary data-[state=active]:font-semibold"
          >
            Dashboard
          </Button>
        </TabsTrigger>
      </TabsList>

      <div
        style={Object.fromEntries(transformStateToCssVariables(theme))}
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
