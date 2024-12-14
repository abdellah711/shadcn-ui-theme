import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { hexToHSL } from "./colors";
import { ThemeState } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const transformStateToCssVariables = (
  state: ThemeState,
  isDark = false
) => {
  const colorsVariables = state.colors.flatMap((color) =>
    color.variables.map((variable) => [
      `--${variable.name}`,
      hexToHSL(variable[isDark ? "darkValue" : "value"]),
    ])
  );

  return [...colorsVariables, [`--radius`, `${state.radius}rem`]];
};

export const getThemeCode = (state: ThemeState) => {
  const lightCssVariables = transformStateToCssVariables(state)
    .map(([k, v]) => `${k}: ${v};`)
    .join("\n\t");
  const darkCssVariables = transformStateToCssVariables(state, true)
    .map(([k, v]) => `${k}: ${v};`)
    .join("\n\t");

  return `@layer base {
  :root {
    ${lightCssVariables}
  }
  .dark {
    ${darkCssVariables}
  }
}
`;
};
