export const Footer=()=>{
    return(
      <footer className="bg-gradient-to-r from-black via-gray-900 to-gray-800 py-4 ">
        {/*<div><div className="bg-gradient-to-r from-black via-gray-900 to-gray-800 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-center text-white">
          <div classNameName="text-center text-4xl font-bold">
            Chaliye dosti karte hain
          </div>
          <div className="hidden md:block">
            <a href="#" className="text-gray-400 hover:text-white px-3">Link 1</a>
            <a href="#" className="text-gray-400 hover:text-white px-3">Link 2</a>
            <a href="#" className="text-gray-400 hover:text-white px-3">Link 3</a>
            <a href="#" className="text-gray-400 hover:text-white px-3">Link 4</a>
          </div>
        </div>
      </div>
    </div>*/}
    
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center ">
  <div className="text-center text-white text-4xl font-bold">
            Chaliye dosti karte hain
          </div>
    
 
    <div className="flex space-x-8">
    
      <a href="https://www.linkedin.com/in/rehanansari123profile/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      {/*<a href="https://x.com/RehanAn27648368" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
        <i className="fab fa-twitter fa-2x"></i>
      </a>*/}
      <a href="https://github.com/prohackerzzz" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
      <i class="fab fa-github fa-2x"></i>
      </a>
      <a href="https://x.com/RehanAn27648368" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400">
        <i class="fas fa-x fa-2x"></i>
      </a>
      
    </div>

  </div>
  <div className="text-center mb-4 ">
      <p className="text-sm text-white">© 2024 Rehan Bhai. All rights reserved.</p>
    </div>
</footer>

    )
}