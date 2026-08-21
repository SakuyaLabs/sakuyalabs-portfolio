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
      <p className="font-sans-jp text-sm tracking-[0.2em] text-teal uppercase">Contact</p>
      <h1 className="font-fraunces mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">お問い合わせ</h1>
      <p className="font-sans-jp mt-6 text-sm leading-loose text-ink-soft">
        Web制作のご相談・お見積り依頼はこちらから。まだ曖昧な段階でも構いません。
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
