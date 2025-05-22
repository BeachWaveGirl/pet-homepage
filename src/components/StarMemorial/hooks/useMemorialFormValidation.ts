
import { z } from "zod";

export const memorialFormSchema = z.object({
  petName: z.string().min(1, "Pet name is required"),
  petType: z.string().optional(),
  petBirthDate: z.string().optional(),
  petPassingDate: z.string().min(1, "Passing date is required"),
  petMessage: z.string().optional(),
  petPhoto: z.string().nullable()
});

export type MemorialFormValues = z.infer<typeof memorialFormSchema>;
