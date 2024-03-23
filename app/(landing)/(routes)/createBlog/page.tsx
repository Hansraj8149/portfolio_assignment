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
            const response:any = await axios.post('api/createBlog', values);
            if(response.ok) alert("Blog created successfull")
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
            <FormLabel>Livelink</FormLabel>
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
  )
}

