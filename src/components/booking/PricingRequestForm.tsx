import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export const PricingRequestForm = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: connect to email / CRM / API
    // For now we just show the success state
    setSubmitted(true);
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
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="" disabled selected>
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
                    className="w-full mt-2 rounded-xl bg-primary text-primary-foreground font-semibold py-3 hover:opacity-90 transition"
                  >
                    {t.form.submit}
                  </button>
                </form>
              </>
            ) : (
              <>
                {/* Success state */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold">
                    {t.form.successTitle}
                  </h3>
                  <p className="text-muted-foreground">
                    {t.form.successBody}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {t.form.successAlt}
                  </p>

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
