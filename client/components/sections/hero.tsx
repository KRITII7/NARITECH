import { FormEvent } from "react";
import { ArrowRight, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { heroHighlights } from "@/data/opportunities";

export function HeroSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-chart-2/10 to-background" />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="container flex flex-col items-center gap-12 py-24 text-center md:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-border/60 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          Women in Tech Collective
        </span>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Discover Your Next{" "}
            <span className="text-primary">Tech Opportunity</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Connect with hackathons, internships, and fellowships designed to
            empower women in technology. Your next breakthrough starts here.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-2xl flex-col gap-3 rounded-2xl border border-card-border/70 bg-card/80 p-3 shadow-lg shadow-primary/5 backdrop-blur md:flex-row md:items-center"
        >
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by domain, location, or keyword..."
              className="h-12 w-full rounded-xl border-transparent bg-background/95 pl-11 text-base"
            />
          </div>
          <Button className="h-12 rounded-xl border border-primary-border bg-primary px-6 text-base font-semibold shadow-sm hover:bg-primary/90">
            Explore Now
            <ArrowRight className="size-4" />
          </Button>
        </form>
        <ul className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          {heroHighlights.map((highlight) => (
            <li
              key={highlight}
              className="inline-flex items-center gap-2 rounded-full border border-card-border/80 bg-card/80 px-4 py-2 shadow-sm"
            >
              <span className="size-2 rounded-full bg-primary" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
