import React from "react";
import { Button } from "./ui/button";
import { useThemeState } from "@/stores/use-theme-state";

type Props = {};

const RADIUS_VALUES = [0, 0.3, 0.5, 0.7, 1, 1.5];

export default function RadiusField({}: Props) {
  const radius = useThemeState((selector) => selector.theme.radius);
  const onChange = useThemeState((selector) => selector.setRadius);
  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-sm">Radius</p>
      <div className="flex gap-2">
        {RADIUS_VALUES.map((value) => (
          <Button
            key={value}
            variant="outline"
            size="sm"
            className="cursor-pointer rounded-full bg-card has-[input:checked]:bg-accent has-[input:checked]:border-primary has-[input:checked]:text-accent-foreground has-[input:checked]:border-2"
            asChild
          >
            <label>
              <input
                type="radio"
                name="radius"
                value={value}
                className="hidden"
                checked={radius === value}
                onChange={() => onChange(value)}
              />
              <span className="inline-block w-[4ch] tabular-nums text-sm text-center">
                {value}
              </span>
            </label>
          </Button>
        ))}
      </div>
    </div>
  );
}
