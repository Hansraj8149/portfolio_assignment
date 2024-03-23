
import { MailIcon, MountainIcon, PhoneIcon } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 py-12 sm:py-16 dark:bg-gray-950">
      <div className="container grid gap-4 px-4 text-center md:px-6 md:grid-cols-2 lg:grid-cols-4 lg:items-center lg:justify-between">
        <div className="flex items-center space-x-2 lg:order-last lg:col-start-2">
          <div className="h-6 w-6" >HS</div>
          <span className="sr-only">Hansraj Saini</span>
        </div>
        <nav className="flex flex-col gap-2 text-sm lg:flex-row lg:gap-4 lg:justify-center">
          <Link className="hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="hover:underline underline-offset-4" href="#">
            Portfolio
          </Link>
          <Link className="hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
        <div className="space-y-2 lg:col-start-3 lg:col-span-2 lg:order-last">
          <h4 className="font-bold tracking-tighter">Get in Touch</h4>
          <p className="text-sm sm:text-base">Reach out to us and we'll get back to you as soon as possible.</p>
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <div className="flex items-center gap-2">
              <MailIcon className="h-4 w-4" />
              <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                Email
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4" />
              <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                Call
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 text-center lg:col-start-4 lg:order-2 lg:justify-end">
          <div className="mx-auto max-w-sm grid gap-2">
            <Link className="rounded-full border overflow-hidden" href="#">
              <img alt="Avatar" className="aspect-square object-cover" height="40" src="./hansraj.png" width="40" />
            </Link>
          </div>
          <div className="text-xs">
            © 2024 Hansraj saini. All rights reserved. | Made with Love by
            <Link className="underline underline-offset-2" href="#">
            Hansraj saini
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}






