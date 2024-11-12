import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
import logo from "../assets/WhatsApp Image 2024-11-12 at 14.10.26_5e77f6d4.jpg"


export const Appbar = () => {
    const userName = localStorage.getItem("name")
    return <div className="flex justify-between  px-10 py-1 border-b text-xl items-center">
        <Link to={"/blogs"}>
        <img src={logo} alt="" className="w-[6%] "/>
        </Link>
        <div className="flex justify-center items-center">
        <div className="flex  space-x-3">
            <Link to={'/publish'}>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 pb-3 text-center ">New Blog</button>
                </Link>
            <Avatar name={userName || "Anonymous"} size="big" />
        </div>
        </div>
    </div>
}