import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "お名前を入力してください"),
  company: z.string().trim().optional(),
  email: z.string().trim().min(1, "メールアドレスを入力してください").email("メールアドレスの形式が正しくありません"),
  message: z.string().trim().min(1, "ご相談内容を入力してください").max(2000, "2000文字以内で入力してください"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
