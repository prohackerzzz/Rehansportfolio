import logo from '../logo-black.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export const Header=()=>{
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

    return(
        <div> <nav className="bg-gradient-to-r from-black via-gray-900 to-gray-800  p-4">
        <div className="max-w-7xl from-black via-gray-900 to-gray-800 text-white mx-auto flex justify-between items-center">
          
          <div className="flex-shrink-0">
           <Link to='/'><img src={logo} className='rounded-full'/></Link>
          </div>
          <div className="hidden md:block font-semibold" id="heads">
            
            <Link to="/" className="text-white hover:text-gray-400 px-3 py-2 rounded-md">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-400 px-3 py-2 rounded-md">About</Link>
            <Link to="/portfolio" className="text-white hover:text-gray-400 px-3 py-2 rounded-md">Portfolio</Link>
            <Link to="/blog" className="text-white hover:text-gray-400 px-3 py-2 rounded-md">Blogs</Link>
            <Link to="/contact" className="text-white hover:text-gray-400 px-3 py-2 rounded-md">Contact</Link>
          </div>
          <div className="md:hidden">
            {/* Hamburger menu button for mobile */}
            <button className="text-white focus:outline-none" onClick={()=>handleClick()}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-4 text-center">
          <Link to="/" className="text-white hover:text-gray-400 px-3 py-2 rounded-md">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-400 px-3 py-2 rounded-md">About</Link>
          <Link to="/portfolio" className="text-white hover:text-gray-400 px-3 py-2 rounded-md">Portfolio</Link>
          <Link to="/blog" className="text-white hover:text-gray-400 px-3 py-2 rounded-md">Blogs</Link>
          <Link to="/contact" className="text-white hover:text-gray-400 px-3 py-2 rounded-md">Contact</Link>
        </div>
      )}
      </nav>
           </div>
    )
}