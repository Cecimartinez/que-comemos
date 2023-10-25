"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
      <form onSubmit={form.handleSubmit(onSubmit)} className=" text-neutral-700 text-3xl font-medium tracking-widest  font-poppins py-10 px-10 rounded-3xl space-y-8">
        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base text-neutral-500" >Email</FormLabel>
              <FormControl>
                <Input className="rounded-3xl px-5 text-neutral-400"  placeholder="email" type="email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="FullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base text-neutral-500">FullName</FormLabel>
              <FormControl>
                <Input className="rounded-3xl px-5 text-neutral-400"  type="text" placeholder="FullName" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="Password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base text-neutral-500">Password</FormLabel>
              <FormControl>
                <Input className="rounded-3xl px-5 text-neutral-400" type="password" placeholder="Password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className=" text-[#B4c170] uppercase  border-2 rounded-3xl border-[#B4c170] mx-16 text-lg tracking-wider  py-7 px-10 font-poppins focus:bg-[#b4c17067] focus:text-neutral-500 font-medium" type="submit"> Submit</Button>
      </form>
    </Form>
  )
}
