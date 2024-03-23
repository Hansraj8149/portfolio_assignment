
import Link from "next/link"

export default function Blog() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container px-4 space-y-12 md:px-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">From the Blog</h2>
          <p className="text-gray-500 dark:text-gray-400">Stories, tips, and features from our community</p>
        </div>
        <div className="grid max-w-3xl gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col space-y-2">
            <Link className="font-medium group" href="#">
              <h3 className="text-xl font-semibold leading-snug transition-colors group-hover:text-gray-700 dark:group-hover:text-gray-300 dark:group-hover:text-gray-300">
                The Art of Automation: How I Turned My Home into a Smart Haven
              </h3>
              <p className="text-sm leading-loose text-gray-500 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400">
                Gone are the days of manual switches and mundane chores. With a few clever hacks and the power of
                automation, I've transformed my living space into a futuristic oasis of convenience and comfort.
              </p>
            </Link>
            <Link className="self-start mt-auto text-sm font-medium" href="#">
              Read More
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link className="font-medium group" href="#">
              <h3 className="text-xl font-semibold leading-snug transition-colors group-hover:text-gray-700 dark:group-hover:text-gray-300">
                The Great Outdoors: Embracing Nature in a Digital World
              </h3>
              <p className="text-sm leading-loose text-gray-500 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400">
                In a world dominated by screens and social media, the call of the wild often goes unheard. But I've
                discovered the perfect balance between the digital realm and the natural world, and I'm here to share my
                journey.
              </p>
            </Link>
            <Link className="self-start mt-auto text-sm font-medium" href="#">
              Read More
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link className="font-medium group" href="#">
              <h3 className="text-xl font-semibold leading-snug transition-colors group-hover:text-gray-700 dark:group-hover:text-gray-300">
                The Power of Words: A Journey Through Literary Landscapes
              </h3>
              <p className="text-sm leading-loose text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400 dark:group-hover:text-gray-400">
                Books have the magical ability to transport us to far-off places, introduce us to fascinating
                characters, and spark our imagination. Join me as I explore the wonders of the literary world.
              </p>
            </Link>
            <Link className="self-start mt-auto text-sm font-medium" href="#">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

