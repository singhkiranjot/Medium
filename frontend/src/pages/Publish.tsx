import axios from "axios"
import { Appbar } from "../component/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title,setTitle] = useState("") 
    const [content,setContent] = useState("") 
    const navigate = useNavigate()
    return <div>
        <Appbar/>
        <div className="flex justify-center py-4">
            <div className="max-w-screen-lg w-full">
                
                    <input onChange={(e)=>{
                        setTitle(e.target.value)
                    }} 
                     type="text" className="my-4 w-full bg-transparent placeholder:text-slate-400 text-slate-700 border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow text-xl" placeholder="Title..."/>
                
                <TextArea onChange={(e)=>{
                    setContent(e.target.value)
                }} />
                <button onClick={async()=>{
                   const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                        title,
                        content
                    },{
                        headers:{
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    navigate(`/blog/${response.data.id}`) 
                }}
                    className=" mt-4 select-none rounded-md bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    Publish Blog
                </button>
            </div>
        </div>
    </div>
}

const TextArea=({onChange}:{onChange: (e: ChangeEvent<HTMLTextAreaElement>)=> void})=>{
    return <div>
        <div>
        <textarea onChange={onChange} rows={8}  className=" focus:outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 " placeholder="Write title of the blog here..."></textarea>
        </div>
        
        
        
  </div>
}