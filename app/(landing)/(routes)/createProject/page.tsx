'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import {z} from 'zod'
import { formSchema, } from "./constants"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateProject() {
const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title:"",
            description:"",
            technologies:[],
            liveLink:"",
            repoLink:"",
            imageUrl:""

        }
    })


    const [newTechnology, setNewTechnology] = useState<string>('');
const [technologies, setTechnologies] = useState<string[]>([]);

const handleTechnologyInputChange = (e:any) => {
  setNewTechnology(e.target.value);
};

const handleAddTechnology = () => {

    setTechnologies([...technologies, newTechnology]);
    // console.log(technologies)
    setNewTechnology('');
  
};

const handleRemoveTechnology = (index:any) => {
  const updatedTechnologies = [...technologies];
  updatedTechnologies.splice(index, 1);
  setTechnologies(updatedTechnologies);
  // console.log(technologies)
};

    const isLoading = form.formState.isSubmitting;

    async function onSubmit(values:z.infer<typeof formSchema>){
values.technologies=technologies
        try {
            const response:any = await axios.post('api/createProject', values);

            if(response) alert("project created successfull")
            router.push('/projects')
            
        }catch(error) {
    console.log(error)
    alert("some error occured while creating project")
        }

    }
  return (
    <section className="w-full mt-10 lg:mt-0 py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col gap-2 mb-10 md:items-center md:gap-4 lg:gap-8 lg:mb-16">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Add Project</h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
            Enter the details to add a new Project.
          </p>
        </div>
      </div>
    <Form {...form} >
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <div className="grid lg:grid-cols-2 gap-4">

      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input placeholder="Title" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
        />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Input placeholder="Description" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
        />
   <FormField
          control={form.control}
          name="technologies"
          render={({ field }) => (
            <FormItem>
            <FormLabel>Technologies</FormLabel>


              <div className="flex flex-wrap gap-2">
               {technologies[technologies.length-1]}
                <button type="button" onClick={() => handleRemoveTechnology(technologies.length-1)} className="ml-2 text-red-500 focus:outline-none">Remove</button>
              </div>
              <Input
                id="technologies"
                type="text"
                placeholder="Enter technologies and press enter"
                value={newTechnology}
                onChange={handleTechnologyInputChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleAddTechnology();
                  }
                }}
              />
            </FormItem>
          )}
        />
      <FormField
        control={form.control}
        name="liveLink"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Livelink</FormLabel>
            <FormControl>
              <Input placeholder="LiveLink" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
        />
      <FormField
        control={form.control}
        name="repoLink"
        render={({ field }) => (
          <FormItem>
            <FormLabel>RepoLink</FormLabel>
            <FormControl>
              <Input placeholder="repoLink" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
        />
         <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>image</FormLabel>
                            <FormControl>
                                <Input type="file"  {...field} />
                            </FormControl>
                            <FormDescription>
                                upload images.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
        </div>
      <Button disabled={isLoading} type="submit">Submit</Button>
    </form>
  </Form>
  </div>
  </section>
  )
}

