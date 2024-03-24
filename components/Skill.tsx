

const skils = [
  {
    label:"NextJS",
    value:"NextJS",
    logo:"./next1.svg",
    description:"React-based, Server-side rendering"
  },
  {
    label:"ReactJS",
    value:"ReactJS",
    logo:"./react.svg",
    description:"Component-based, declarative, JavaScript"
  },
  {
    label:"TailwindCSS",
    value:"TailwindCSS",
    logo:'./tailwind.svg',
    description:"Utility-first CSS"
  },
  {
    label:"NodeJS",
    value:"NodeJS",
    logo:"./nodejs.svg",
    description:"JavaScript runtime environment"
  },
  {
    label:"Prisma",
    value:"Prisma",
    logo:"./prisma.svg",
    description:"A Database ORM Tool"
  },
  {
    label:"MongoDB",
    value:"MongoDB",
    logo:"./mongodb.svg",
    description:"Document-oriented database"
  },
]
export default function Skill() {
    return (
      <section className="w-full py-12 md:py-24">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Skills Showcase: Empowering Digital Innovation with Expertise
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            {skils.map((skill)=> (

            <div key={skill.value} className="flex  justify-start p-4 border border-gray-200 rounded-lg shadow-sm md:flex-row md:p-6 md:gap-4 md:items-start md:justify-start md:gap-2">
              <img
                alt="Icon"
                className="rounded-lg"
                height="48"
                src={skill.logo}
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{skill.label}</h3>
                <p className="text-sm text-gray-500">{skill.description}</p>
              </div>
            </div>
            ))}
            
          </div>
        </div>
      </section>
    )
  }
  
  