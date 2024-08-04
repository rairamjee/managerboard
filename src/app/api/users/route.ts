import prisma from "@/lib/database"

export async function GET() {
    const users = prisma.user.findMany()
    return Response.json({ users })
}

export async function POST(req: Request) {
    const {email, phone, name} = await req.json();
    const newUser = await prisma.user.create({
        data: {
            email,
            phone,
            name
        }
    })
    return Response.json({ newUser })
}