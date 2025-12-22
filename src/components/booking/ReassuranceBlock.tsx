import { useTranslation } from "@/hooks/useTranslation";
import { Check } from "lucide-react";

export const ReassuranceBlock = () => {
  const { t } = useTranslation();

  // Safety: if missing/empty, render nothing
  const items = t.bookingReassurance?.credibility ?? [];
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <section className="pt-4 pb-6 bg-background-subtle">
      <div className="container-grovero">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground">
          {items.map((text: string, idx: number) => (
            <div key={idx} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
