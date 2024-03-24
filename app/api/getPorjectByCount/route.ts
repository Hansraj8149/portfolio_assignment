import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest) {
    
    try {
        const url = new URL(req.url);
        const count = url.searchParams.get("count");
        console.log(url)
        const Projects = await prismadb.project.findMany({
            take:Number(count),
        });
        return NextResponse.json(Projects, {status:201});

    }catch(error) {
        console.log("GETPROJECT_ERROR", error);
        return new NextResponse("internal server error", {status:500})
    }
}