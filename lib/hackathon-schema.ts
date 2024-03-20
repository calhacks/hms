import * as z from "zod"; 

export const hackathonSchema = z.object({
  hackathon_name: z.string({
    required_error: "A hackathon name is required.",
  }).min(2, {
    message: "Username must be at least 2 characters.",
  }),

  location: z.string({
    required_error: "A location is required.",
  }).min(2, {
    message: "Location must be at least 2 characters.",
  }),

  dateRange: z.object({
    from: z.date().optional(),
    to: z.date().optional(),
  }),

  timezone: z.string().optional(),
})

export type HackathonFormValues = z.infer<typeof hackathonSchema>;
