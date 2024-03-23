import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req:NextRequest) {
    try {
        const body = await req.json();

        const {title, content, author, imageUrl=''} = body;

        const newBlog = await prismadb.blog.create({
            data:{
                title,
                content,
                author,
                createdAt:new Date(),
                imageUrl
            }
        })

        return NextResponse.json(newBlog, {status:201});

    }catch(error) {
        console.log("CREATEPROJECT_ERROR", error);
        return new NextResponse("internal server error", {status:500})
    }
}