"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowUpCircleIcon, ChevronRightIcon, PackageIcon } from "lucide-react";
import SkeletonLoading from "./SkeltonLoading";

interface blogProps {
  id: number;
  title: string;
  content: string;
  author: string;
  imageUrl: string;
  createdAt: Date;
}
export default function Blog() {
  const [blogs, setBlogs] = useState<blogProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchBlogs() {
    const response = await axios.get("api/getBlogByCount?count=2");
    setIsLoading(false);
    setBlogs(response.data);
    console.log(blogs);
  }
  useEffect(() => {
    fetchBlogs();
    console.log(blogs);
  }, []);

  return (
    <section className="container w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Blogs
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Stores about design, techlogy, and the web.
          </p>
        </div>
        

        <Link
          className=" w-full flex items-center justify-center mb-10 gap-4 text-primary-500 dark:text-primary-400"
          href="#"
          >
          <span className="font-medium">View all posts</span>
          <ChevronRightIcon className="w-6 h-6" />
        </Link>
        
      </div>
      {isLoading && <SkeletonLoading number={2}/>}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col items-stretch gap-2">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="grid gap-1.5">
                    <CardTitle>{blog.title}</CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Posted on {new Date(blog.createdAt).toLocaleString()}
                    </p>
                    <CardDescription>
                      {blog.content.split(" ").slice(0, 50).join(" ")}
                      {blog.content.split(" ").length > 50 && <span>...</span>}
                    </CardDescription>

                    {blog.content.split(" ").length > 50 && (
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <ArrowUpCircleIcon className="w-5 h-5 stroke-true" />
                        <Link href="#">Read More</Link>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height={40}
                      src="./hansraj.png"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width={40}
                    />
                    <div className="text-sm font-medium not-italic">
                      {blog.author}
                      <span className="block text-xs font-normal text-gray-500 dark:text-gray-400">
                        Developer
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
