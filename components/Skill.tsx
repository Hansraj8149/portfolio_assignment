
export default function Skill() {
    return (
      <section className="w-full py-12 md:py-24">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Showcase your skills with beautifully designed skill cards.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm md:flex-row md:p-6 md:gap-4 md:items-start md:justify-start md:gap-2">
              <img
                alt="Icon"
                className="rounded-lg"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Design</h3>
                <p className="text-sm text-gray-500">User interface design</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm md:flex-row md:p-6 md:gap-4 md:items-start md:justify-start md:gap-2">
              <img
                alt="Icon"
                className="rounded-lg"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Development</h3>
                <p className="text-sm text-gray-500">Frontend development</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm md:flex-row md:p-6 md:gap-4 md:items-start md:justify-start md:gap-2">
              <img
                alt="Icon"
                className="rounded-lg"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Marketing</h3>
                <p className="text-sm text-gray-500">Digital marketing</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm md:flex-row md:p-6 md:gap-4 md:items-start md:justify-start md:gap-2">
              <img
                alt="Icon"
                className="rounded-lg"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">UX</h3>
                <p className="text-sm text-gray-500">User experience design</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm md:flex-row md:p-6 md:gap-4 md:items-start md:justify-start md:gap-2">
              <img
                alt="Icon"
                className="rounded-lg"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Communication</h3>
                <p className="text-sm text-gray-500">Effective communication</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm md:flex-row md:p-6 md:gap-4 md:items-start md:justify-start md:gap-2">
              <img
                alt="Icon"
                className="rounded-lg"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Creativity</h3>
                <p className="text-sm text-gray-500">Creative thinking</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  