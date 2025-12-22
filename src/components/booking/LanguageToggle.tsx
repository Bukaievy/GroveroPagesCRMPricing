import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";

export const LanguageToggle = () => {
  const { locale } = useTranslation();
  const location = useLocation();
  
  // Determine the target path for each language
  const getTargetPath = (targetLocale: string) => {
    const pathParts = location.pathname.split('/');
    pathParts[1] = targetLocale;
    return pathParts.join('/');
  };
  
  return (
    <div className="flex items-center gap-1 rounded-lg bg-secondary p-1">
      <Link
        to={getTargetPath('nl')}
        className={cn(
          "px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
          locale === 'nl' 
            ? "bg-background text-foreground shadow-grovero-sm" 
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        NL
      </Link>
      <span className="text-muted-foreground/50">|</span>
      <Link
        to={getTargetPath('en')}
        className={cn(
          "px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
          locale === 'en' 
            ? "bg-background text-foreground shadow-grovero-sm" 
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        EN
      </Link>
    </div>
  );
};
