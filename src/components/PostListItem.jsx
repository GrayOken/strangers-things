import { Link } from "react-router-dom";

export default function PostListItem({ post }) {

    return (
        <Link key={post._id} className="post-card" to={`/posts/${post._id}`}>
            <div>{post.title}</div>
            <div>{post.description}</div>
            <div>{post.price}</div>
        </Link>
    )
}