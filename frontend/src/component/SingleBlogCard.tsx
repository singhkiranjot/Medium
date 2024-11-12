import { Blogs } from "../hooks"
import { Avatar } from "./BlogCard"

export const SingleBlogCard = ({blog} : {blog:Blogs}) => {
    return <div className="flex  justify-center mt-10 ">
        <div className="flex w-4/6">
            <div className="w-3/5">
                <div className="text-4xl font-extrabold">
                    {blog.title}
                </div>
                <div className="text-base text-slate-500 pt-2">
                    Published on 20 Dec 2024
                </div>
                <div className="text-xl text-slate-800 pt-3">
                    {blog.content} 
                </div>
            </div>
            <div className="w-2/5">
                <div className="text-xl text-slate-700">
                    Author
                </div>
                <div className="flex items-center space-x-4 pt-3">
                    <div>
                        <Avatar name={blog.author.name.toUpperCase() || "Anonymous"} size="big"  />
                    </div>
                    <div  >
                        <div className=" text-2xl font-bold">
                            {blog.author.name || "Anonymous"}
                        </div>
                        <div className="text-lg text-slate-500 pt-2">
                            This is a catch phrase which the author will have to attract the readers.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}