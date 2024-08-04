export async function GET() {
    // const res = await fetch('https://data.mongodb-api.com/...', {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'API-Key': process.env.DATA_API_KEY,
    //     },
    // })
    // const data = await res.json()

    const data = {name: "Vikash Kumar" }

    return Response.json({ data })
}

export async function POST(request:Request){
    console.log(request)
    

    return Response.json({...request})
}