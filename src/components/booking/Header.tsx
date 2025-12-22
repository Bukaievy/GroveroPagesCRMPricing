import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageToggle } from "./LanguageToggle";

export const Header = () => {
  const { t, locale } = useTranslation();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-grovero flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          to={`/${locale}`}
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <img
            src="/logo-grovero.svg"
            alt="Grovero"
            className="h-12 w-auto"
          />
        </Link>
        
        {/* Navigation */}
        <nav className="flex items-center gap-6">
        <a
          href="https://go.grovero.com/"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {t.header.home}
        </a>

          
          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
};
