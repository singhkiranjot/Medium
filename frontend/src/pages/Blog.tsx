import { useParams } from "react-router-dom"
import { Appbar } from "../component/Appbar"
import { SingleBlogCard } from "../component/SingleBlogCard"
import { useBlog } from "../hooks"
import { SkeletonBlog } from "../component/Sleletons"


export const Blog = () => {
    const { id } = useParams()
    const {loading , blog} = useBlog({
        id: id || ""
    })
    if(loading){
        return <div >
            <Appbar/>
            <SkeletonBlog/>
        </div>
    }
    return <div>
        <Appbar/>
        <SingleBlogCard blog={blog || {content : "", title : "", author : {name : ""}, id : ""}} />
    </div>
}