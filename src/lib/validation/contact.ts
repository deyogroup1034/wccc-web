import { z } from "zod";

export const CONTACT_REASONS = [
  { value: "get-help", label: "I need help" },
  { value: "volunteer", label: "Volunteering" },
  { value: "donate", label: "Donating / giving" },
  { value: "partner", label: "Partnering / a drive" },
  { value: "general", label: "Something else" },
] as const;

const reasonValues = CONTACT_REASONS.map((r) => r.value) as [
  string,
  ...string[],
];

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  reason: z.enum(reasonValues),
  message: z
    .string()
    .trim()
    .min(10, "Please share a little more (at least 10 characters).")
    .max(4000, "That message is a bit long — please shorten it."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function reasonLabel(value: string): string {
  return CONTACT_REASONS.find((r) => r.value === value)?.label ?? "General";
}
