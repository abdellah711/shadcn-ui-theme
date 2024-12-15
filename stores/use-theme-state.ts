import { initialColors } from "@/lib/constants";
import { Color, ThemeState } from "@/lib/types";
import { create } from "zustand";

export type State = {
  theme: ThemeState;
  setColors: (colors: Color[]) => void;
  setColor: (color: Color) => void;
  setRadius: (radius: number) => void;
};

export const useThemeState = create<State>((set) => ({
  theme: {
    colors: initialColors,
    radius: 0.5,
  },
  setColors: (colors) =>
    set((state) => ({ theme: { ...state.theme, colors } })),
  setColor: (color) =>
    set((state) => ({
      theme: {
        ...state.theme,
        colors: state.theme.colors.map((c) =>
          c.name === color.name ? color : c
        ),
      },
    })),
  setRadius: (radius) =>
    set((state) => ({ theme: { ...state.theme, radius } })),
}));
