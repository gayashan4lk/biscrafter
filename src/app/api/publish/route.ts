export async function POST(req: Request) {
    const { blogPost } = await req.json()
    console.log(blogPost)
    return Response.json({ message: 'Blog post published' })
}
