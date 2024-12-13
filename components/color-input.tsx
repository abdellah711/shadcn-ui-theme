"use client";

import { cn } from "@/lib/utils";

type Props = {
  color: string;
  onChange: (color: string) => void;
} & Omit<React.HTMLAttributes<HTMLLabelElement>, "onChange">;

export default function ColorInput({
  color,
  onChange,
  className,
  ...props
}: Props) {
  return (
    <label
      className={cn("flex border size-11 rounded-lg cursor-pointer", className)}
      style={{
        background: color,
        borderColor: `color-mix(in srgb, ${color}, #7f7f7f)`,
      }}
      {...props}
    >
      <input
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="size-full opacity-0 pointer-events-none"
      />
    </label>
  );
}
