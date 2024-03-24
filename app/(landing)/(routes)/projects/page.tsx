'use client'
import SkeletonLoading from "@/components/SkeltonLoading";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import axios from "axios";
import { Github,Chrome,  HomeIcon,} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react";

interface projectProps{
  id:number,
  title:string,
  description:string,
  technologies:string[],
  liveLink:string,
  repoLink:string,
  imageUrl:string,
}
export default function Project() {
  const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState<projectProps[]>([]);

    async function getProjects() {
        try {
            const response = await axios.get('/api/getProjects');
            setIsLoading(false);
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    }

    useEffect(() => {
        getProjects();
    }, []);

  return (
    <section className="mt-10 lg:mt-0 w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-2 mb-10 md:items-center md:gap-4 lg:gap-8 lg:mb-16">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">My Projects</h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
              Here are some of the projects I've been working on.
            </p>
          </div>
        </div>
        {isLoading && <SkeletonLoading number={3}/>}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project)=>(

          <Card key={project.id}>
            <CardHeader>
             <CardTitle>{project.title}</CardTitle>
              
            </CardHeader>
            <CardContent className="grid gap-2">
            <CardDescription>{project.description}</CardDescription>
          <div className="flex flex-col items-center justify-center">
              <div className="grid gap-20 grid-cols-2 mb-2 mt-2">
              <Link href={project.liveLink}><Chrome/></Link>
              <Link href={project.repoLink}><Github/></Link>
              </div>
              
      
           
              {project.technologies}
              </div>
            </CardContent>
            <CardFooter>
               
<img
alt="Project Image"
className="aspect-video overflow-hidden rounded-lg object-cover object-center"
height="200"
src='./businessblog.jpeg'
width="400"
/> 
            </CardFooter>
          </Card>
            ))}

        
        </div>
      </div>
    </section>
  )
}

