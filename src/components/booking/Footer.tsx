import { useTranslation } from "@/hooks/useTranslation";

export const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container-grovero">
        <p className="text-center text-sm text-muted-foreground">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
};
