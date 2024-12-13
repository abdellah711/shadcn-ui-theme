"use client";
import { calculateContrast } from "@/lib/colors";
import ColorInput from "./color-input";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";

type Color = {
  name: string;
  value: string;
  label: string;
};

type Props = {
  colorName: string;
  colors: Color[];
  onChange: (color: Color[]) => void;
};

export default function ColorCard({ colorName, colors, onChange }: Props) {
  const contrast =
    colors.length > 1 && calculateContrast(colors[0].value, colors[1]!.value);
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
                color={color.value}
                onChange={(value) => {
                  onChange(
                    colors.map((c) =>
                      c.name === color.name ? { ...c, value } : c
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
