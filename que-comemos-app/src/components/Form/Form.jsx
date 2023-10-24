"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
    // 1. Define your form.
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "email",
        fullname:"fullname",
        password:"password"

      },
    })
  
    // 2. Define a submit handler.
    function onSubmit(values) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" text-white text-2xl tracking-widest bg-[#B4c170] font-poppins py-10 px-10 rounded-3xl space-y-8">
        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="FullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>FullName</FormLabel>
              <FormControl>
                <Input placeholder="FullName" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="Password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />


        <Button className=" border text-lg tracking-wider  py-7 px-10 font-poppins focus:bg-[#b4c17059]" type="submit"> Submit</Button>
      </form>
    </Form>
  )
}
