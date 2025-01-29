export async function POST(req: Request, res: Response) {
  const { userMessage } = await req.json()
  // const msg = await getCompletion(userMessage)
  return Response.json({ message: userMessage })
}
