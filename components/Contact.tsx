/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4dl5r3WRAcY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section className="container w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Contact Me
        </h2>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Please fill the below form and I will get back to you as soon as possible.
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-gray-600 dark:text-gray-400" htmlFor="name">
            Name
          </Label>
          <Input
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-gray-600 dark:text-gray-400" htmlFor="email">
            Email
          </Label>
          <Input
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-gray-600 dark:text-gray-400" htmlFor="message">
            Message
          </Label>
          <Input
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            defaultValue="I would like to receive more information"
            id="message"
          />
        </div>
  
        <Button className="w-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white" type="submit">
          Submit
        </Button>
      </div>
    </div>
    </section>
  )
}

