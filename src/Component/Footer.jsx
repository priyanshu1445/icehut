import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#38622F] text-white py-12 px-6" data-aos="fade-up">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div>
          <h3 className="text-3xl font-bold mb-4">IceHut Technology</h3>
          <p className="text-sm">
            Empowering your digital presence with expert web solutions and modern design.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/portfolio" className="hover:underline">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          
          {/* Address */}
          <p className="text-sm flex items-start gap-2">
            <MapPin className="w-8 h-8 mt-[2px]" />
            <a
              href="https://www.google.com/maps/place/Office+4,+Radhika+Vihar+D,+Near+Iskcon+Temple,+Mansarovar,+Jaipur+302020"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Office 4, Radhika Vihar D, Near Iskcon Temple, Mansarovar, Jaipur 302020
            </a>
          </p>

          {/* Phone */}
          <p className="text-sm flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <a href="tel:+918209843003" className="hover:underline">
              +91 8209843003
            </a>
          </p>

          {/* Email */}
          <p className="text-sm flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <a href="mailto:info@icehuttechnologies.com" className="hover:underline">
              info@icehuttechnologies.com
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Facebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Instagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-green-300 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} IceHut Technology. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
