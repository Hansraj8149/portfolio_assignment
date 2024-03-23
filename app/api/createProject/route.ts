import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req:NextRequest) {
    try {
        const body = await req.json();

        const {title, description, technologies,liveLink='', repoLink='', imageUrl=''} = body;

        const newProject = await prismadb.project.create({
            data:{
                title,
                description,
                technologies,
                liveLink,
                repoLink,
                imageUrl
            }
        })

        return NextResponse.json(newProject, {status:201});

    }catch(error) {
        console.log("CREATEPROJECT_ERROR", error);
        return new NextResponse("internal server error", {status:500})
    }
}