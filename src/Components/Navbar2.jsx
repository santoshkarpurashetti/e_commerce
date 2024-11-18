import React from 'react'
import { Menu, X, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom'

function Navbar2() {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
  <>
   <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
          
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              <h1>S K</h1>
            </span>

            <div className="hidden md:flex items-center space-x-8">
            <a href='#experience' className="text-gray-600 hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
            <Link to='/Execceries' href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Execceries</Link>
            <Link to='/SignUp'> <button className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                SignUp
              </button></Link>
             
              <Link to='/LogIn'><button className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                LogIn
              </button></Link>
          </div>

          <div className="md:hidden flex items-center">
          <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
             >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <div className="text-gray-600 hover:text-indigo-600 transition-colors">
     
             
         
            </div>
          </div>
         
        </div>
        {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#experience"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
            >


                
              Contact
            </a>


            <Link to='/SignUp'> <button className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                SignUp
              </button></Link>
             
              <Link to='/LogIn'><button className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                LogIn
              </button></Link>
          </div>
        </div>
      )}
        </div>
      </nav>
  </>
  )
}

export default Navbar2
