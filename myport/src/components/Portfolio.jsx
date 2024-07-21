import { Link } from "react-router-dom"

export const Portfolio=()=>{
    return(
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl">Dekh raha hai binod kaise galat raaste par aa gaye hai</p>
          <p className="text-xl mt-10">Are majak kar rahe hai bhai aap sahi raaste par hai ye page abhi ban raha hai</p>
          <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Ab ghar laut jaaiye</Link>
        </div>
      </div>
    )
}