import photo from '../undraw_Predictive_analytics_re_wxt8.png'
import shoto from '../coding-3-24.png'
import choto from '../coding-4-89.png'
import noto from '../coding-1-72.png'
import loto from '../coding-5-7.png'
import kyoto from '../coding-5-61.png'
import hoto from '../data-analysis-1-60.png'


export const Hero=()=>{
    return (
        <div>
        <div className='flex bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white'> 
        <div className='flex-1 md:ml-10 md:mt-20 ml-10 ml-6 mr-6'> 
        <h2 className='text-6xl text-yellow-500 mb-4 font-bold'>Welcome to My Portfolio!</h2>
          <p className='text-gray-300 font-semibold text-2xl my-10'>
  Hello and welcome! I’m thrilled to have you here. Explore my journey as a software engineer, delve into my diverse projects, and discover the innovations I’m passionate about. Whether you’re here to learn more about my work, read my latest blog posts, or connect for potential collaborations, I hope you find what you’re looking for. Let's embark on this exciting tech journey together!</p></div>
        <div  className='flex-1 hidden md:block'>
         <img src={shoto}/>
        </div>
        </div>
        <div className='mt-10 mb-10'>
            
        <div class="container mx-auto">
    <h1 class="text-3xl font-bold text-center mb-8">Web based projects</h1>
    {/*<hr className='border-t-2 border-gray-700 my-4 '/>*/}
    <div class="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <a href="https://github.com/prohackerzzz/ReactNews">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={kyoto} alt="Image 1" class="w-full h-48 object-cover"/>
        <div class="p-4 text-white bg-black">
          <h2 class="text-xl font-semibold mb-2">React based News website</h2>
          <p class="text-gray-300">This is a depiction of how we can use axios to fetch data from url</p>
        </div>
      </div>
      </a>
      <a href="https://github.com/prohackerzzz/Hirecontractor/tree/master">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden ">
        <img src={choto} alt="Image 2" class="w-full h-48 object-cover"/>
        <div class="p-4 bg-black" >
          <h2 class="text-xl text-white font-semibold mb-2">Hire contractor</h2>
          <p class="text-gray-300">This is a depiction of how php works with html and javasript</p>
        </div>
      </div>
      </a>
      <a href="https://github.com/prohackerzzz/AngularProj">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={loto} alt="Image 2" class="w-full h-48 object-cover"/>
        <div class="p-4 bg-black">
          <h2 class="text-xl text-white font-semibold mb-2">To-do App</h2>
          <p class="text-gray-300 ">This is a depiction of the to do App in MEAN stack</p>
        </div>
      </div>
      </a>
      <a href="https://github.com/prohackerzzz/Aafiacollection/tree/master">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={noto} alt="Image 2" class="w-full h-48 object-cover"/>
        <div class="p-4 bg-black">
          <h2 class="text-xl text-white font-semibold mb-2">Aafia Collection</h2>
          <p class="text-gray-300">This is a depiction of how to work with front end frameworks</p>
        </div>
      </div>
      </a>
    </div>
  </div>
        </div>
        <div class="container mx-auto">
    <h1 class="text-3xl font-bold text-center mb-8">Machine Learning Projects</h1>
    <div class="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <a href="https://www.kaggle.com/code/rehacks/notebook8f6851f5cc">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={hoto} alt="Image 1" class="w-full h-48 object-cover"/>
        
        <div class="p-4 text-white bg-black">
          <h2 class="text-xl font-semibold mb-2">Credit card Customer churning prediction</h2>
          <p class="text-gray-300">This is the notebook where I wrote my first deep learning model</p>
        </div>
      </div>
      </a>
      </div>
    </div>
        </div>
    )
}