import { Briefcase, CalendarDays, ChevronDown, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { filters, opportunities } from "@/data/opportunities";
import { cn } from "@/lib/utils";

const typeStyles: Record<string, string> = {
  hackathon: "border-chart-3/40 bg-chart-3/10 text-chart-3",
  internship: "border-chart-2/40 bg-chart-2/10 text-chart-2",
  fellowship: "border-primary/50 bg-primary/10 text-primary",
};

export function FeaturedOpportunitiesSection() {
  return (
    <section className="container space-y-12 pb-24" id="featured">
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Featured Opportunities
        </h2>
        <p className="text-lg text-muted-foreground">
          Browse and filter from our curated list of opportunities tailored for
          every stage of your tech journey.
        </p>
      </div>
      <div className="grid gap-4 rounded-3xl border border-card-border/80 bg-card/95 p-6 shadow-sm shadow-primary/5 md:grid-cols-4">
        {filters.map((filter) => (
          <button
            key={filter.label}
            type="button"
            className="flex items-center justify-between gap-3 rounded-2xl border border-card-border/80 bg-background/80 px-4 py-3 text-left text-sm font-medium text-muted-foreground transition hover:border-primary/40 hover:text-primary"
          >
            <span className="block">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
                {filter.label}
              </span>
              <span className="block text-sm font-semibold text-foreground">
                {filter.value}
              </span>
            </span>
            <ChevronDown className="size-4" />
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {opportunities.map((opportunity) => (
          <article
            key={opportunity.id}
            className="flex h-full flex-col gap-5 rounded-3xl border border-card-border/80 bg-card/95 p-6 shadow-sm shadow-primary/5 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {opportunity.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {opportunity.company}
                </p>
              </div>
              <Badge
                variant="outline"
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-semibold capitalize",
                  typeStyles[opportunity.type],
                )}
              >
                {opportunity.type}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {opportunity.description}
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="rounded-full border border-card-border/80 bg-background/60 px-3 py-1 text-xs font-medium"
              >
                {opportunity.domain}
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full border border-card-border/80 bg-background/60 px-3 py-1 text-xs font-medium"
              >
                {opportunity.level}
              </Badge>
              {opportunity.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="rounded-full border border-card-border/80 bg-background/60 px-3 py-1 text-xs font-medium"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-card-border/70 pt-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4" />
                {opportunity.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="size-4" />
                Deadline: {opportunity.deadline}
              </span>
            </div>
            <Button className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary-border bg-primary px-4 py-3 text-sm font-semibold shadow-sm hover:bg-primary/90">
              <Briefcase className="size-4" />
              Apply Now
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
