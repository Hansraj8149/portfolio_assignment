
import Link from "next/link"


import { navLinks } from "@/constants"
export default function Navbar() {
  return (

    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex h-14 items-center">
          <Link className="mr-auto flex items-center gap-2 text-lg font-semibold" href="/">


            <img  height="48" width="48" src="./logo.png" alt="Hansraj"/>
          </Link>
          <nav className="ml-auto flex items-center space-x-4">
            {navLinks.map((navLink)=> (

            <Link key={navLink.value}
              className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
              href={navLink.href}
            >
              {navLink.label}
            </Link>
            ))}

          
          </nav>
        </div>
      </div>
    </nav>
    
  )
}

