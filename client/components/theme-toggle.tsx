import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      aria-label="Toggle theme"
      onClick={handleToggle}
      className="relative h-10 w-10 rounded-full border border-border bg-background/70 shadow-sm backdrop-blur transition hover:border-primary-border hover:bg-primary/10"
    >
      {mounted && theme === "dark" ? (
        <Sun className="size-5 text-primary" />
      ) : (
        <Moon className="size-5 text-primary" />
      )}
    </Button>
  );
}
