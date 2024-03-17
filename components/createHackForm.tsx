"use client"
import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon } from "@radix-ui/react-icons"
import { addDays, format } from "date-fns"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { DatePickerWithRange } from "../components/ui/dateRangePicker"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
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

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      hackathon_name: "",
      location: "",
      dateRange: { from: undefined, to: undefined },
      timezone: "",
    },
  })
    
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        
        <FormField
          control={form.control}
          name="hackathon_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hackathon Name*</FormLabel>
              <FormControl>
                <Input placeholder="Cal Hacks 10.0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location*</FormLabel>
              <FormControl>
                <Input placeholder="MLK Pauley Ballroom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dateRange"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <DatePickerWithRange />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="timezone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Timezone</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a timezone" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="pst">PST</SelectItem>
                  <SelectItem value="mst">MST</SelectItem>
                  <SelectItem value="cst">CST</SelectItem>
                  <SelectItem value="est">EST</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />




        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
