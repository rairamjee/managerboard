import { getUser } from "@/lib/action";

async function Product() {
    const user: any = await getUser();
    const timer = new Promise((resolve) => setTimeout(() => { return resolve("ho gaya") }, 1000))
    await timer;

    // const throwError = () => {
    //     "use server"
    //     throw new Error();
    // }

    console.log(user)
    return (
        <div>
            <div className="w-full bg-red-50">

                <form action={async (data) => { "use server"; throw new Error() }}>
                    {/* <input type="text" /> */}
                    <button type="submit" />
                </form>
            </div>
            <h1 className="text-5xl text-cyan-600 text-center m-2">Product details {user[0].name} </h1>
            <p className="text-base	text-center first-letter:capitalize first-letter:text-red-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maxime, fuga voluptatibus veritatis debitis neque cum delectus dignissimos! Unde molestiae ducimus minima placeat! Facere dignissimos fugit autem aliquam explicabo eum consequatur vero illo. Sunt est mollitia sint. Voluptate temporibus eligendi et iusto nobis vitae reiciendis necessitatibus, culpa repudiandae illum. A ducimus similique, molestias vitae laborum possimus suscipit esse quisquam alias et eius eum mollitia voluptatibus porro quam, delectus impedit quidem, molestiae beatae nulla iste atque commodi. Assumenda, blanditiis eum animi, nostrum eius quia in consequatur tempore aliquid nihil consequuntur! Id officiis eveniet quisquam architecto cumque illo placeat doloribus, delectus rem?</p>
        </div>
    )
}

export default Product;

// server-side rendering -> server action, axios
// client side -> axios, server action [ as a prop pass karna hoga server side component ], direct istemal
