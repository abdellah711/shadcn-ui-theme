import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { hexToHSL } from "./colors";
import { ThemeState } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const transformStateToCssVariables = (state: ThemeState) => {
  const colorsVariables = state.colors.flatMap((color) =>
    color.variables.map((variable) => [
      `--${variable.name}`,
      hexToHSL(variable.value),
    ])
  );

  return [...colorsVariables, [`--radius`, `${state.radius}rem`]];
};
