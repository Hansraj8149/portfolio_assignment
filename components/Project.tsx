'use client'
import { CardContent, CardFooter, Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import axios from "axios";
import { ArrowUpCircleIcon, ChevronRightIcon, PackageIcon } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react";

export default function Project() {
    const [projects, setProjects]:any = useState([]);

    async function getProjects() {
        try {
            const response = await axios.get('/api/getProjects');
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    }

    useEffect(() => {
        getProjects();
    }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Check out some of the projects our customers have been working on.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project:any) => (
          <div className="flex flex-col items-stretch gap-2">
                        <Card key={project.id}>
                            <Link href={project.liveLink}>
                             
                            </Link>
                            <CardHeader className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <PackageIcon className="w-6 h-6" />
                                    <div className="grid gap-1.5">
                                        <CardTitle>{project.title}</CardTitle>
                                        <CardDescription>{project.description}</CardDescription>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold">
                                    <ArrowUpCircleIcon className="w-5 h-5 stroke-true" />
                                    <Link href={project.liveLink}>Deployed</Link>
                                </div>
                            </CardHeader>
                            <CardContent className="flex items-center gap-4">
                                <div className="grid gap-2">
                                    <h2 className="font-bold">Technologies</h2>
                                    <p className="text-sm leading-loose md:leading-loose-paragraph">
                                        {project.technologies.join(', ')}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
          </div>
                    ))}
      
       
        </div>
      </div>
    </section>
  )
}

