import { stats } from "@/data/opportunities";

export function StatsSection() {
  return (
    <section className="container -mt-16 pb-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="group flex flex-col gap-4 rounded-2xl border border-card-border/60 bg-card/90 p-6 shadow-sm shadow-primary/5 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Icon className="size-5" />
              </span>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
