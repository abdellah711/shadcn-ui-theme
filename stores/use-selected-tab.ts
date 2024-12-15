import { Tab } from "@/components/examples/examples-tabs";
import { create } from "zustand";

type SelectedTab = {
  selectedTab: Tab;
  setSelectedTab: (tab: string) => void;
};

export const useSelectedTab = create<SelectedTab>((set) => ({
  selectedTab: "dashboard",
  setSelectedTab: (tab) => set({ selectedTab: tab as Tab }),
}));
