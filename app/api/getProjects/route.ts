import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest) {

    try {
        const projects = await prismadb.project.findMany();
        // console.log(projects)
        return NextResponse.json(projects, {status:201});

    }catch(error) {
        console.log("GETPROJECT_ERROR", error);
        return new NextResponse("internal server error", {status:500})
    }
}