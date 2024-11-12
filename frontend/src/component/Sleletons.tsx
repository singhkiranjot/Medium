import { Dot } from "./BlogCard"

export const SkeletonBlogs = () => {
    return <div role="status" className=" animate-pulse">
            <div className="flex justify-center ">
            <div className=" border-b border-slate-200 pb-2 w-screen  max-w-screen-md cursor-pointer">
            <div className="flex items-center  pt-4 ">
                <div>
                    <svg className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                </div>

                <div className="text-base pl-2 font-semibold text-slate-600 ">
                    <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                </div>
                <div>
                    <Dot/>
                </div>
                <div className="text- pl-2 font-light text-slate-500 ">
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                </div>
            </div>
            <div className="text-2xl font-semibold pt-2">
            <div className="h-2.5 bg-gray-200 rounded-full  w-full mb-4"></div>
            </div>
            <div className=" text-lg font-normal text-slate-700">
            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div> 
            </div>
            <div className="text-sm text-slate-400 pt-3">
            <div className="h-2 bg-gray-200 rounded-full w-40 "></div>
            </div>
        </div>
        </div> 
    </div>   
}






export const SkeletonBlog = () => {
    return <div role="status" className=" animate-pulse">
            <div className="flex  justify-center mt-10 ">
        <div className="flex w-4/6">
            <div className="w-3/5">
                <div className="text-4xl font-extrabold">
                <div className="h-10 bg-gray-200 rounded-full  w-1/2 mb-4"></div>
                </div>
                <div className="text-base text-slate-500 pt-2">
                <div className="h-2 bg-gray-200 rounded-full w-1/3 mb-2.5"></div>
                </div>
                <div className="text-xl text-slate-800 pt-3">
                <div className="h-2.5 bg-gray-200 rounded-full  w-1/3 mb-4"></div> 
                </div>
            </div>
            <div className="w-2/5">
                <div className="text-xl text-slate-700">
                <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                </div>
                <div className="flex items-center space-x-4 pt-3">
                    <div>
                    <svg className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    </div>
                    <div  >
                        <div className=" text-2xl font-bold">
                        <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                        </div>
                        <div className="text-lg text-slate-500 pt-2">
                        <div className="h-2 bg-gray-200 rounded-full w-40 "></div>                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
        
    </div>
    
    
}