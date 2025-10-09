import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-chart-2/10 to-background" />
      <div className="container relative mx-auto max-w-2xl rounded-3xl border border-card-border/80 bg-card/95 p-12 text-center shadow-2xl shadow-primary/10 backdrop-blur">
        <span className="inline-flex items-center justify-center rounded-full border border-primary-border/60 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          Error 404
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          We couldn’t find that page
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          The page you are looking for may have been moved, deleted, or might be
          in the process of being built. Let’s get you back to the opportunities
          that matter.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            asChild
            className="rounded-full border border-primary-border bg-primary px-6 py-3 text-sm font-semibold shadow-sm hover:bg-primary/90"
          >
            <Link to="/">
              <ArrowLeft className="mr-2 size-4" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
