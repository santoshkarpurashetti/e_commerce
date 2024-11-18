import React from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar1() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Rocket className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">
              CartoonWorld
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/Home"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Home
            </Link>
            <a
              href="#features"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#gallery"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Contact
            </a>
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
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
            >
              Home
            </a>
            <a
              href="#features"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
            >
              Features
            </a>
            <a
              href="#gallery"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
