"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactFormValues } from "./contactSchema";

/** お問い合わせフォーム（企画書3章「Contact」、サイトのゴールCV地点）。実際には送信されないモック実装。 */
export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div role="status" className="rounded-lg border border-gold/30 bg-gold/5 p-8 text-center">
        <p className="font-sans-jp text-sm font-medium text-ink">お問い合わせありがとうございます</p>
        <p className="font-sans-jp mt-2 text-xs leading-relaxed text-muted">
          担当者からのご連絡を確認いただく想定のデモ画面です（Concept Portfolioのため実際には送信されません）。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="contact-name" className="font-sans-jp text-xs text-muted">
          お名前
        </label>
        <input
          id="contact-name"
          type="text"
          {...register("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className="font-sans-jp mt-1.5 w-full rounded-md border border-border bg-paper px-3 py-2.5 text-sm text-ink focus:border-gold focus:outline-none"
        />
        {errors.name && (
          <p id="contact-name-error" className="font-sans-jp mt-1 text-xs text-gold">
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
          {...register("company")}
          className="font-sans-jp mt-1.5 w-full rounded-md border border-border bg-paper px-3 py-2.5 text-sm text-ink focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="font-sans-jp text-xs text-muted">
          メールアドレス
        </label>
        <input
          id="contact-email"
          type="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className="font-sans-jp mt-1.5 w-full rounded-md border border-border bg-paper px-3 py-2.5 text-sm text-ink focus:border-gold focus:outline-none"
        />
        {errors.email && (
          <p id="contact-email-error" className="font-sans-jp mt-1 text-xs text-gold">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="font-sans-jp text-xs text-muted">
          ご相談内容
        </label>
        <textarea
          id="contact-message"
          rows={5}
          {...register("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className="font-sans-jp mt-1.5 w-full resize-none rounded-md border border-border bg-paper px-3 py-2.5 text-sm text-ink focus:border-gold focus:outline-none"
        />
        {errors.message && (
          <p id="contact-message-error" className="font-sans-jp mt-1 text-xs text-gold">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="font-sans-jp mt-2 self-start rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-paper transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
      >
        {isSubmitting ? "送信しています…" : "送信する"}
      </button>
    </form>
  );
}
