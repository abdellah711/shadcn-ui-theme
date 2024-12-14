"use client";
import { calculateContrast } from "@/lib/colors";
import ColorInput from "./color-input";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";
import { ColorValue } from "@/lib/types";
import { useTheme } from "next-themes";

type Props = {
  colorName: string;
  colors: ColorValue[];
  onChange: (color: ColorValue[]) => void;
};

export default function ColorCard({ colorName, colors, onChange }: Props) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const valueAttr = isDark ? "darkValue" : "value";

  const contrast =
    colors.length > 1 &&
    calculateContrast(colors[0][valueAttr], colors[1]![valueAttr]);
  return (
    <div className="bg-muted flex gap-4 p-3 rounded-lg w-fit">
      <div className="flex flex-col justify-center">
        <p className="font-semibold mb-1">{colorName}</p>
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
      <div className="flex gap-2">
        {colors.map((color) => (
          <Tooltip key={color.name} delayDuration={0}>
            <TooltipTrigger>
              <ColorInput
                color={color[valueAttr]}
                onChange={(value) => {
                  onChange(
                    colors.map((c) =>
                      c.name === color.name ? { ...c, [valueAttr]: value } : c
                    )
                  );
                }}
              />
              <TooltipContent>{color.label}</TooltipContent>
            </TooltipTrigger>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
