import React from "react";
import { Icons } from "./examples/icons";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <header className="px-5 py-3 flex gap-3 items-center border-b ">
      <a
        className="font-semibold flex items-center gap-2 me-auto"
        href="https://github.com/shadcn/ui"
      >
        <Icons.logo className="size-4" />
        shadch/ui theme
      </a>

      <ThemeToggle />
      <Button asChild variant="ghost" size="icon">
        <a href="https://github.com/abdellah711/shadcn-ui-theme">
          <Icons.gitHub />
        </a>
      </Button>
    </header>
  );
}
