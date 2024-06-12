import { z } from "zod";

export const acceptMessageSchema = z.object({
  content: z
    .string()
    .min(10, "Content must be atleast of 10 characters")
    .max(300, "Content must be atmost of 300 characters"),
});
