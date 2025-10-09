import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/95">
      <div className="container grid gap-10 py-16 lg:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-6">
          <Link to="/" className="inline-flex items-center gap-2 text-xl font-semibold">
            <span className="rounded-2xl bg-primary/15 px-3 py-1 text-sm font-bold tracking-[0.2em] text-primary">
              NARI
            </span>
            <span className="text-foreground">TECH</span>
          </Link>
          <p className="max-w-md text-base text-muted-foreground">
            Empowering women in technology with curated access to hackathons, internships, and fellowships worldwide.
          </p>
          <form className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              required
              placeholder="Join our newsletter"
              className="h-11 rounded-full border-border/80 bg-background/90"
            />
            <Button className="h-11 rounded-full border border-primary-border bg-primary px-6 font-semibold shadow-sm hover:bg-primary/90">
              Subscribe
            </Button>
          </form>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Platform
          </h3>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/" className="transition hover:text-primary">
              Opportunities
            </Link>
            <Link to="/" className="transition hover:text-primary">
              Community
            </Link>
            <Link to="/" className="transition hover:text-primary">
              Success stories
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Support
          </h3>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/" className="transition hover:text-primary">
              Help center
            </Link>
            <Link to="/" className="transition hover:text-primary">
              Contact
            </Link>
            <Link to="/" className="transition hover:text-primary">
              Partnerships
            </Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} NARI Tech. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/" className="transition hover:text-primary">
              Privacy
            </Link>
            <Link to="/" className="transition hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
