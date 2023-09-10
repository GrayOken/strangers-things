import { useParams } from "react-router-dom"
import { useGetAllPostsQuery } from "../reducers/things"
import { useEffect, useState } from "react"


export default function PostDetails() {
    const { data } = useGetAllPostsQuery()
    const params = useParams()
    const [post, setPost] = useState()
    useEffect(
        () => {
            if (data === undefined) {
                return
            }
            setPost(data.data.posts.find((elem) => elem._id === params.postId))
        },
        [data]
    )
    return (
        <>
            {
                !post ? "Loading" : (
                    <div>
                        <h1>{post.title}</h1>
                        <div>{post.description}</div>
                        <h4>Asking Price: {post.price}</h4>
                        <h3>Seller: {post.author.username}</h3>
                        <div>Location: {post.location}</div>
                        <div>{post.willDeliver ? "Will Deliver" : "Pickup Only"}</div>
                    </div>
                )
            }
        </>
    )
}