import { Link } from "react-router-dom";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur",
        className,
      )}
    >
      <div className="container flex h-16 items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-lg font-bold tracking-[0.2em] text-primary">
            N
          </span>
          <span className="text-lg font-semibold text-foreground">
            <span className="text-primary">NARI</span>
            <span className="text-foreground">TECH</span>
          </span>
        </Link>
        <div className="hidden flex-1 items-center md:flex">
          <div className="relative w-full max-w-lg">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search opportunities..."
              className="h-11 w-full rounded-full border-border/80 bg-background/90 pl-11 pr-4 text-sm shadow-sm focus:border-primary-border focus-visible:ring-primary"
            />
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="md:hidden">
            <Search className="size-5 text-muted-foreground" aria-hidden="true" />
          </div>
          <ThemeToggle />
          <Button className="hidden rounded-full border border-primary-border bg-primary px-5 font-semibold shadow-sm transition hover:bg-primary/90 md:inline-flex">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}
