"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactFormValues } from "./contactSchema";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/sakuyalabs@gmail.com";

/**
 * お問い合わせフォーム（企画書3章「Contact」、サイトのゴールCV地点）。
 * SakuyaLabs Portfolio本体はConcept Projectではなく実在するSakuyaLabs自身の
 * 窓口のため、sakuyalabs.com本体と同じFormSubmit経由で実際に送信する
 * （宛先はsakuyalabs.com本体のお問い合わせフォームと同一）。
 */
export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null);
    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name,
          organization: values.company || "(未記入)",
          email: values.email,
          message: values.message,
          _subject: "SakuyaLabs Portfolioからのお問い合わせ",
        }),
      });

      if (!response.ok) {
        throw new Error(`送信に失敗しました（status: ${response.status}）`);
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError("送信に失敗しました。時間をおいて再度お試しいただくか、sakuyalabs@gmail.com へ直接ご連絡ください。");
    }
  };

  if (isSubmitted) {
    return (
      <div role="status" className="rounded-[24px] border border-teal/25 bg-teal/5 p-8 text-center">
        <p className="font-sans-jp text-sm font-medium text-ink">お問い合わせありがとうございます</p>
        <p className="font-sans-jp mt-2 text-xs leading-relaxed text-ink-soft">
          内容を確認のうえ、担当よりご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="contact-name" className="font-sans-jp text-xs text-muted">
          お名前 <span className="text-teal">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          {...register("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className="font-sans-jp mt-1.5 w-full rounded-xl border border-border bg-white/70 px-3 py-2.5 text-sm text-ink focus:border-teal focus:outline-none"
        />
        {errors.name && (
          <p id="contact-name-error" className="font-sans-jp mt-1 text-xs text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-company" className="font-sans-jp text-xs text-muted">
          会社名・屋号（任意）
        </label>
        <input
          id="contact-company"
          type="text"
          autoComplete="organization"
          {...register("company")}
          className="font-sans-jp mt-1.5 w-full rounded-xl border border-border bg-white/70 px-3 py-2.5 text-sm text-ink focus:border-teal focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="font-sans-jp text-xs text-muted">
          メールアドレス <span className="text-teal">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className="font-sans-jp mt-1.5 w-full rounded-xl border border-border bg-white/70 px-3 py-2.5 text-sm text-ink focus:border-teal focus:outline-none"
        />
        {errors.email && (
          <p id="contact-email-error" className="font-sans-jp mt-1 text-xs text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="font-sans-jp text-xs text-muted">
          ご相談内容 <span className="text-teal">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          {...register("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className="font-sans-jp mt-1.5 w-full resize-none rounded-xl border border-border bg-white/70 px-3 py-2.5 text-sm text-ink focus:border-teal focus:outline-none"
        />
        {errors.message && (
          <p id="contact-message-error" className="font-sans-jp mt-1 text-xs text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      <div>
        <label className="font-sans-jp flex items-start gap-2 text-xs text-ink-soft">
          <input
            type="checkbox"
            {...register("privacyAgreement")}
            aria-invalid={!!errors.privacyAgreement}
            aria-describedby={errors.privacyAgreement ? "contact-privacy-error" : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-teal focus:ring-teal"
          />
          <span>
            <a
              href="https://sakuyalabs.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-teal underline underline-offset-2 hover:text-ink"
            >
              プライバシーポリシー
            </a>
            に同意する <span className="text-teal">*</span>
          </span>
        </label>
        {errors.privacyAgreement && (
          <p id="contact-privacy-error" className="font-sans-jp mt-1 text-xs text-red-600">
            {errors.privacyAgreement.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="font-sans-jp mt-2 inline-flex w-fit items-center gap-2 self-start rounded-full bg-gradient-to-r from-[#087c78] to-[#229d98] px-7 py-3.5 text-sm font-bold text-white shadow-[0_14px_32px_rgba(8,124,120,0.18)] transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
      >
        {isSubmitting ? "送信しています…" : "送信する"}
      </button>

      {submitError && (
        <p role="alert" className="font-sans-jp text-xs text-red-600">
          {submitError}
        </p>
      )}

      <p className="font-sans-jp text-xs text-muted">送信内容はお問い合わせ対応のためにのみ利用します。</p>
    </form>
  );
}
