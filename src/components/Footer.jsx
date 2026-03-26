import { NavLink } from 'react-router-dom'
import { RiInstagramLine, RiFacebookCircleLine, RiTwitterXLine, RiYoutubeLine } from 'react-icons/ri'
import logo from '../assets/images/logo_alone_white.svg'

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Auto Cars" className="w-32 mb-4" />
          <p className="text-gray-400 text-sm">
            Your trusted destination for premium and luxury vehicles. Drive the extraordinary.
          </p>
        </div>
  
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><NavLink to="/" className="hover:text-white transition">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-white transition">About Us</NavLink></li>
            <li><NavLink to="/services" className="hover:text-white transition">Services</NavLink></li>
            <li><NavLink to="/products" className="hover:text-white transition">Products</NavLink></li>
            <li><NavLink to="/blog" className="hover:text-white transition">Blog</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-white transition">Contact</NavLink></li>
          </ul>
        </div>

       
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Engine Servicing</li>
            <li>Wheel Alignment</li>
            <li>Body Spraying</li>
            <li>Vehicle Inspection</li>
            <li>Car Financing</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
          
          <ul className="space-y-2 text-gray-400 text-sm mb-6">
            <li>123 Auto Drive, Cape Town</li>
            <li>info@autocars.co.za</li>
            <li>+27 21 123 4567</li>
          </ul>

          <div className="flex gap-4">
            <RiInstagramLine size={22} className="hover:text-white text-gray-400 cursor-pointer transition" />
            <RiFacebookCircleLine size={22} className="hover:text-white text-gray-400 cursor-pointer transition" />
            <RiTwitterXLine size={22} className="hover:text-white text-gray-400 cursor-pointer transition" />
            <RiYoutubeLine size={22} className="hover:text-white text-gray-400 cursor-pointer transition" />
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Auto Cars. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer