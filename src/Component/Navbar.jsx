import React, { useEffect, useRef, useState } from "react";
import { Menu, X, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Imported Link
import logo from "../assets/logo.png"; // Adjust the path as necessary

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBars, setShowBars] = useState(true);
  const prevScrollY = useRef(0);
  const timeoutRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current && currentScrollY > 60) {
        setShowBars(false);
      }

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setShowBars(true);
      }, 300);

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div>
      <header className="w-full fixed top-0 z-50">
        {/* Top Social Media Bar */}
        <div
          className={`bg-[#38622F] text-white text-sm transition-all duration-500 ${
            showBars ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          }`}
        >
          <div className="container mx-auto flex justify-between gap-4 py-1 px-4">
            <div>
              <p>abc@gmail.com</p>
            </div>
            <div className="flex items-center gap-4 flex-row">
              <a href="#" className="hover:text-gray-200"><Facebook size={16} /></a>
              <a href="#" className="hover:text-gray-200"><Instagram size={16} /></a>
              <a href="#" className="hover:text-gray-200"><Twitter size={16} /></a>
              <a href="#" className="hover:text-gray-200"><Linkedin size={16} /></a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`bg-white shadow-md transition-all duration-500 ${
            showBars ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className=" w-[100px] md:w-[200px] md:h-[80px]">
              <img className="w-full h-full" src={logo} alt="Logo" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
              <Link to="/" className="hover:text-[#38622F] transition">Home</Link>
              <Link to="/about" className="hover:text-[#38622F] transition">About</Link>
              <Link to="/services" className="hover:text-[#38622F] transition">Services</Link>
              <Link to="/portfolio" className="hover:text-[#38622F] transition">Portfolio</Link>
          <a href="tel:+918209843003" className="hover:text-[#38622F] transition">
Contact
</a>

            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            className={`md:hidden bg-white px-4 overflow-hidden transition-all duration-500 ease-in-out ${
              menuOpen ? "max-h-96 py-4" : "max-h-0"
            }`}
          >
            <Link to="/" className="block py-2 text-gray-700 hover:text-[#38622F]">Home</Link>
            <Link to="/services" className="block py-2 text-gray-700 hover:text-[#38622F]">Services</Link>
            <Link to="/portfolio" className="block py-2 text-gray-700 hover:text-[#38622F]">Portfolio</Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-[#38622F]">About</Link>
            <a href="tel:+918209843003" className="hover:text-[#38622F] transition">
Contact
</a>

          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
