import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Web制作のご相談・お問い合わせはこちらから。",
};

/** Contactページ（企画書3章「Contact」、サイトのゴールCV地点）。 */
export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-20 sm:px-12 lg:px-20">
      <p className="font-sans-jp text-sm tracking-[0.2em] text-gold uppercase">Contact</p>
      <h1 className="font-fraunces mt-5 text-3xl font-semibold text-ink sm:text-4xl">お問い合わせ</h1>
      <p className="font-sans-jp mt-6 text-sm leading-loose text-muted">
        Web制作のご相談・お見積り依頼はこちらから。このフォームはポートフォリオのデモのため、実際には送信されません。
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
