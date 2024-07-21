import { Footer } from "./Footer"
import { Header } from "./Header"
import some from '../data-processing-40.png'

export const Blog=()=>{
    return(
    <div>
        <Header/>
        <div class="container mx-auto m-10">
    
    <h1 class="text-3xl font-bold text-center mb-8">Here you'll find blogs I write on different platforms</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <a href="https://medium.com/p/54cca5db9fb8">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden ">
        <img src={some} alt="Image 2" class="w-full h-48 object-cover"/>
        <div class="p-4 bg-black" >
          <h2 class="text-xl text-white font-semibold mb-2">Getting started with Machine Learning</h2>
          <p class="text-gray-300">This blog is for the people who wanted a head start in Machine Learning</p>
        </div>
        </div>
        </a>
        </div>
      </div>
        <Footer/>
    </div>
    )
}