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
} from "@/components/ui/card";
import { ArrowUpCircleIcon, ChevronRightIcon, PackageIcon } from "lucide-react";
import SkeletonLoading from "@/components/SkeltonLoading";
import BlogsSkeleton from "@/components/BlogsSkeleton";

interface blogProps {
  id: number;
  title: string;
  content: string;
  author: string;
  imageUrl: string;
  createdAt: Date;
}
export default function Blogs() {
  const [blogs, setBlogs] = useState<blogProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchBlogs() {
    const response = await axios.get("api/getBlogs");
    setIsLoading(false);
    setBlogs(response.data);
    // console.log(blo/gs);
  }
  useEffect(() => {
    fetchBlogs();
    // console.log(blogs);
  }, []);


  return (
    <div className="mt-10 lg:mt-0 px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <div className="mx-auto grid gap-6 lg:gap-8 max-w-6xl items-start lg:grid-cols-3 lg:justify-center">
        <div className="space-y-4 lg:col-span-2">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blogs</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Thoughts, musings, and deep dives into the world of technology.
            </p>
          </div>
        </div>
        {isLoading && <BlogsSkeleton number={2}/>}
        <div className="w-full space-y-4 lg:space-y-6 lg:col-span-3">
            {blogs.map((blog)=>(

          <div key={blog.id} className="grid w-full grid-cols-3 items-start gap-8">
            <div className="aspect-card overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10 focus:not-sr-only sr-only" href="#">
                Read more
              </Link>
              <img
                alt="Cover image"
                className="object-cover"
                height={225}
                src="./businessblog.jpeg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width={400}
              />
            </div>
            <div className="space-y-2 col-span-2">
              <h2 className="text-xl font-bold sm:text-2xl">{blog.title}</h2>
              <p className="text-gray-500 dark:text-gray-400">
              {blog.content.split(" ").slice(0, 50).join(" ")}
                      {blog.content.split(" ").length > 50 && <span>...</span>}
              </p>
              <div>
                <Link className="font-semibold underline underline-offset-4" href="#">
                  Read more
                </Link>
              </div>
            </div>
          </div>
            ))}
          
        </div>
      </div>
    </div>
  )
}

