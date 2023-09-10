import { useGetAllPostsQuery } from "../reducers/things"
import { useEffect, useState } from "react"
import PostListItem from "./PostListItem"


export default function ListView() {
    const [searchTerm, setSearchTerm] = useState("")
    const [posts, setPosts] = useState([])
    const { data, isLoading } = useGetAllPostsQuery()

    useEffect(() => {
        if (data) {
            setPosts(data.data.posts)
        }
    }, [data])

    function postMatches(post, text) {
        return post.title.includes(text)
    }

    function filterPosts() {
        if (searchTerm.length) {
            return posts.filter((post) => postMatches(post, searchTerm))
        }
        return posts
    }


    return (
        <div>
            <label>
                Search Posts:
                <input type="search" onChange={(e) => { setSearchTerm(e.target.value) }} />
            </label>
            {
                isLoading ? "Loading" : filterPosts().map((p, idx) => <PostListItem key={idx} post={p} />
                )
            }
        </div>
    )
}