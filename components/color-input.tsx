"use client";

import { Content, PopoverProps, Portal } from "@radix-ui/react-popover";
import { Chrome } from "@uiw/react-color";
import { Popover, PopoverTrigger } from "./ui/popover";
import { TooltipTrigger } from "./ui/tooltip";

type Props = {
  color: string;
  onChange: (color: string) => void;
} & PopoverProps;

export default function ColorInput({ color, onChange, ...props }: Props) {
  return (
    <Popover {...props}>
      <TooltipTrigger asChild>
        <PopoverTrigger
          className="flex border size-11 rounded-lg cursor-pointer"
          style={{
            background: color,
            borderColor: `color-mix(in srgb, ${color}, #7f7f7f)`,
          }}
          aria-label="Pick a color"
        />
      </TooltipTrigger>
      <Portal>
        <Content
          align="start"
          className="mt-1.5 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-20"
        >
          <Chrome
            color={color}
            onChange={(color) => onChange(color.hex)}
            showAlpha={false}
          />
        </Content>
      </Portal>
    </Popover>
  );
}
