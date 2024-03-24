import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest) {
    
    try {
        const url = new URL(req.url);
        const count = url.searchParams.get("count");
        // console.log(url)
        const blogs = await prismadb.blog.findMany({
            take:Number(count),
        });
        return NextResponse.json(blogs, {status:201});

    }catch(error) {
        console.log("GETPROJECT_ERROR", error);
        return new NextResponse("internal server error", {status:500})
    }
}