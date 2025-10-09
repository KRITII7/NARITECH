import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { categories } from "@/data/opportunities";

export function CategoriesSection() {
  return (
    <section className="container space-y-12 py-16" id="categories">
      <div className="mx-auto max-w-2xl text-center space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Explore Opportunities
        </h2>
        <p className="text-lg text-muted-foreground">
          Find the perfect opportunity to advance your tech career and connect
          with inclusive communities.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <article
              key={category.name}
              className="group flex h-full flex-col gap-6 rounded-3xl border border-card-border/70 bg-card/95 p-8 shadow-sm shadow-primary/5 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-chart-3/10 text-chart-3">
                <Icon className="size-5" />
              </span>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between text-sm text-muted-foreground">
                <span>{category.count}</span>
                <Button
                  variant="ghost"
                  className="gap-2 rounded-full border border-transparent px-3 py-1 text-sm font-semibold text-primary transition hover:border-primary/40 hover:bg-primary/10"
                >
                  Browse
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
