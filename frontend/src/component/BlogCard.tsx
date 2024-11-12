import { Link } from "react-router-dom"

interface blogCardType {
    authorName : string,
    title : string,
    content : string,
    publishDate : string,
    id:string
}
export const BlogCard = ({authorName , title , content , publishDate , id} : blogCardType) => {
    return <Link to={`/blog/${id}`}>
        <div className="flex justify-center ">
            <div className=" border-b border-slate-200 pb-2 w-screen  max-w-screen-md cursor-pointer">
            <div className="flex items-center  pt-4 ">
                <div>
                    <Avatar name={authorName}/>
                </div>

                <div className="text-base pl-2 font-semibold text-slate-600 ">
                    {authorName}
                </div>
                <div>
                    <Dot/>
                </div>
                <div className="text- pl-2 font-light text-slate-500 ">
                    {publishDate}
                </div>
            </div>
            <div className="text-2xl font-semibold pt-2">
                {title}
            </div>
            <div className=" text-lg font-normal text-slate-700">
                {content.slice(0 , 100) + ' ...'} 
            </div>
            <div className="text-sm text-slate-400 pt-3">
                {`${Math.ceil(content.length/100)} min read`}
            </div>
        </div>
        </div>
    </Link>
    
}

export const Dot = () => {
    return <div className="h-1 w-1 rounded-full bg-slate-300 ml-2" >
    </div>
}

export const Avatar = ({name , size = "small"}  : {name:string , size?:string} ) => {
    return <div className={` flex items-center justify-center  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size == 'small' ? 'w-7 h-7' : 'w-10 h-10'} `}>
    <span className={`font-medium ${size === "small" ? 'text-sm' : 'text-2xl'}  text-gray-600 dark:text-gray-300 pb-0.5`}>
    { name[0].toUpperCase()}
    </span>
</div>
}