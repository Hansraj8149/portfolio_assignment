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
import { formSchema, technologyOptions } from "./constants"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import axios from "axios"
import { useState } from "react"

export default function CreateProject() {

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
  if (newTechnology.trim() !== '') {
    setTechnologies([...technologies, newTechnology.trim()]);
    setNewTechnology('');
  }
};

const handleRemoveTechnology = (index:any) => {
  const updatedTechnologies = [...technologies];
  updatedTechnologies.splice(index, 1);
  setTechnologies(updatedTechnologies);
  console.log(technologies)
};

    const isLoading = form.formState.isSubmitting;

    async function onSubmit(values:z.infer<typeof formSchema>){

        try {
            const response:any = await axios.post('api/createProject', values);
            if(response.ok) alert("project created successfull")
        }catch(error) {
    console.log(error)
    alert("some error occured while creating project")
        }

    }
  return (
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
                {technologies.map((atech, index) => (
                  <div key={index} className="bg-gray-200 rounded-md px-2 py-1">
                    {technologies[technologies.length-1]}
                    <button type="button" onClick={() => handleRemoveTechnology(index)} className="ml-2 text-red-500 focus:outline-none">Remove</button>
                  </div>
                ))}
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
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}

