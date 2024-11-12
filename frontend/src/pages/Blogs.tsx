import { Appbar } from "../component/Appbar"
import { BlogCard } from "../component/BlogCard"
import { SkeletonBlogs } from "../component/Sleletons"
import { useBlogs } from "../hooks"



export const Blogs = () => {
    const {loading , blogs} = useBlogs()
    if(loading){
        return <div>
            <Appbar/>
            <SkeletonBlogs/>
            <SkeletonBlogs/>
            <SkeletonBlogs/>
            <SkeletonBlogs/>
            <SkeletonBlogs/>
            
        </div>
    }
    return <div >
        <Appbar />
        
        <div className="pt-5">
            {blogs.map(blog => <BlogCard 
                id={blog.id}
                authorName={blog.author.name || "Anonymous"} 
                title={blog.title} 
                content={blog.content} 
                publishDate="20 Dec 2024" />
            )}
        </div>
        </div>
    
}