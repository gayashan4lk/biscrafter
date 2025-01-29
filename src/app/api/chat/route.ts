import { NextRequest, NextResponse } from "next/server";
import { BlogWorkflow } from "@/lib/workflows/blog-workflow";

export async function POST(req: NextRequest) {
    try {
        const { topic } = await req.json();

        if (!topic) {
            return NextResponse.json(
                { error: "Topic is required" },
                { status: 400 }
            );
        }

        const workflow = new BlogWorkflow();
        const blogPost = await workflow.run({ topic });

        return NextResponse.json({ blogPost });
    } catch (error) {
        console.error("Error generating blog post:", error);
        return NextResponse.json(
            { error: "Failed to generate blog post" },
            { status: 500 }
        );
    }
}
