import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export const PricingRequestForm = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const payload = {
      name: String(formData.get("name") || ""),
      business: String(formData.get("business") || ""),
      email: String(formData.get("email") || ""),
      intendedUse: String(formData.get("intendedUse") || "")
    };

    try {
      // Optional: wire to a webhook (Formspree/Basin/Make/Zapier/custom endpoint).
      // If you haven't set it yet, the form will still "work" by showing success,
      // but will log a warning so you remember to wire it before production.
      const webhookUrl = (import.meta as any).env?.VITE_PRICING_FORM_WEBHOOK_URL;

      if (webhookUrl) {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        if (!res.ok) {
          throw new Error(`Webhook returned ${res.status}`);
        }
      } else {
        console.warn("Missing VITE_PRICING_FORM_WEBHOOK_URL. Form not sent anywhere.");
      }

      setSubmitted(true);
      formEl.reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please email info@grovero.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-6 pb-6 bg-background">
      <div className="container-grovero">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl bg-card border border-border shadow-grovero-lg p-6 sm:p-8">
            {!submitted ? (
              <>
                {/* Intro */}
                {t.form?.intro && (
                  <p className="text-muted-foreground mb-6 text-center">
                    {t.form.intro}
                  </p>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {t.form.fields.nameLabel}
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder={t.form.fields.namePlaceholder}
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {t.form.fields.businessLabel}
                    </label>
                    <input
                      name="business"
                      type="text"
                      placeholder={t.form.fields.businessPlaceholder}
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {t.form.fields.emailLabel}
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder={t.form.fields.emailPlaceholder}
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {t.form.fields.useLabel}
                    </label>
                    <select
                      name="intendedUse"
                      required
                      defaultValue=""
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="" disabled>
                        {t.form.fields.usePlaceholder}
                      </option>
                      {t.form.fields.useOptions.map(
                        (option: string, index: number) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 rounded-xl bg-primary text-primary-foreground font-semibold py-3 hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : t.form.submit}
                  </button>
                </form>

                {/* No-sales line (below form) */}
                {t.bookingReassurance?.noSales && (
                  <p className="mt-5 text-center text-sm text-muted-foreground">
                    {t.bookingReassurance.noSales}
                  </p>
                )}
              </>
            ) : (
              <>
                {/* Success state */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold">{t.form.successTitle}</h3>
                  <p className="text-muted-foreground">{t.form.successBody}</p>

                  <p className="text-sm text-muted-foreground">{t.form.successAlt}</p>

                  <a
                    href={t.form.successAltHref}
                    className="inline-block mt-2 text-primary font-medium underline"
                  >
                    {t.form.successAltCta}
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
