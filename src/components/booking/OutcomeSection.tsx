import { useTranslation } from "@/hooks/useTranslation";
import { CheckCircle2 } from "lucide-react";

export const OutcomeSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="pt-10 pb-12 bg-background-subtle">
      <div className="container-grovero">
        <div className="max-w-2xl mx-auto">
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-foreground mb-10">
            {t.outcome.title}
          </h2>
          
          {/* Outcome Cards */}
          <div className="grid gap-4">
            {t.outcome.bullets.map((bullet, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border shadow-grovero-sm transition-all duration-300 hover:shadow-grovero-md hover:border-primary/20"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
