
import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full pt-12 md:pt-32 mt-10 lg:mt-0 lg:pt-32">
      <div className="container px-4 flex flex-col items-center gap-4">
        <div className="mx-auto max-w-4xl grid gap-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Hi, I'm Hansraj
          </h1>
          <p className="text-center text-gray-500 md:text-xl dark:text-gray-400">
            I'm a passionate designer and developer creating beautiful experiences.
          </p>
        </div>
        <div className="grid gap-4">
          <Link
            className="inline-flex items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="https://drive.google.com/file/d/1734fwaBZIjRTpjlHZqdTyBjQBpQtoG3G/view?usp=drive_link"
          >
           Resume
          </Link>
        </div>
        <img
          alt="Profile Picture"
          className="rounded-full"
          height={200}
          src="./hansraj.png"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width={200}
        />
      </div>
    </section>
  )
}

