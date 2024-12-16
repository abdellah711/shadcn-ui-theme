"use client";
import { calculateContrast } from "@/lib/colors";
import { cn } from "@/lib/utils";
import { useThemeState } from "@/stores/use-theme-state";
import { useTheme } from "next-themes";
import ColorInput from "./color-input";
import { Tooltip, TooltipContent } from "./ui/tooltip";

type Props = {
  colorName: string;
};

export default function ColorCard({ colorName }: Props) {
  const { theme: mode } = useTheme();
  const isDark = mode === "dark";
  const valueAttr = isDark ? "darkValue" : "value";
  const color = useThemeState(
    (state) => state.theme.colors.find((c) => c.name === colorName)!
  );
  const onChange = useThemeState((selector) => selector.setColor);
  const contrast =
    color.variables.length > 1 &&
    calculateContrast(
      color.variables[0][valueAttr],
      color.variables[1]![valueAttr]
    );
  return (
    <div className="bg-muted flex gap-4 p-3 rounded-lg w-full">
      <div className="flex flex-col justify-center">
        <p className="font-semibold mb-1">
          {colorName.replace("sidebar-", "")}
        </p>
        {contrast && (
          <p
            className={cn("text-xs", {
              "text-red-600": contrast < 4.5,
              "text-amber-600": contrast >= 4.5 && contrast < 7,
              "text-green-600": contrast >= 7,
            })}
          >
            contrast{" "}
            <span className="w-[5ch] inline-block">{contrast.toFixed(2)}</span>
          </p>
        )}
      </div>
      <div className="flex gap-2 ms-auto">
        {color.variables.map((col) => (
          <Tooltip key={col.name} delayDuration={0}>
            <ColorInput
              color={col[valueAttr]}
              onChange={(value) => {
                onChange({
                  ...color,
                  variables: color.variables.map((c) =>
                    c.name === col.name ? { ...c, [valueAttr]: value } : c
                  ),
                });
              }}
            />
            <TooltipContent>{col.label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
