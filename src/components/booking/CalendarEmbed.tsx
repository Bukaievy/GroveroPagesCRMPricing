import { useTranslation } from "@/hooks/useTranslation";
import { Mail } from "lucide-react";

export const CalendarEmbed = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-6 pb-6 bg-background">
      <div className="container-grovero">
        <div className="max-w-4xl mx-auto">
          {/* Calendar Container */}
          <div className="rounded-2xl bg-card border border-border shadow-grovero-lg overflow-hidden">
            <iframe
              src="https://app.cal.eu/grovero/checkin?theme=light"
              width="100%"
              height="650"
              frameBorder="0"
              scrolling="no"
              className="w-full"
              title="MiniGro 30-minute check-in"
            />
          </div>

          {/* Fallback Contact */}
          <div className="mt-3 text-center">
            <p className="inline-flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>{t.calendar.fallback}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
