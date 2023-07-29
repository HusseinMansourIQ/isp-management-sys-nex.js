

export default async function BlogPostPage({params}){
    const posts = await fetch('http://localhost:3000/api/content').then(
        (res)=>res.json()
    )

    const post = posts.find((post)=> post.slug === params.slug)


    return(
        <div>
            <h1>{post.title}</h1>
            <h1>{post.content}</h1>
        </div>
    )

}