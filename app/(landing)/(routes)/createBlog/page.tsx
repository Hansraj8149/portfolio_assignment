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
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useState } from "react"
import { formSchema } from "./constants"

export default function CreateProject() {
  const [blogs, setBlogs] = useState([]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title:"",
            content:"",
            createdAt: new Date(),
            author:"",
            imageUrl:""

        }
    })


  

    const isLoading = form.formState.isSubmitting;

    async function onSubmit(values:z.infer<typeof formSchema>){

        try {
          values.createdAt=new Date();
          console.log(values)
            const response:any = await axios.post('api/createBlog', values);
            setBlogs(response.data);
            console.log(blogs);
            if(response.ok) alert("Blog created successfull")
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Create Blogs</h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
              I want to create the blogs then enter the details.
            </p>
          </div>
        </div>

    <Form {...form} >
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <div className="  grid lg:grid-cols-2 gap-4">

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
        name="content"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Input placeholder="content" {...field} />
            </FormControl>
            <FormDescription>
              enter the content of the blog
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
        />

      <FormField
        control={form.control}
        name="author"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Author</FormLabel>
            <FormControl>
              <Input placeholder="author" {...field} />
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
  </div>
  </section>

  )
}

