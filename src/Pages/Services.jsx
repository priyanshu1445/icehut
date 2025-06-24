import React, { useEffect } from 'react';
import Navbar from '../Component/Navbar';
import AOS from 'aos';
import { Send } from "lucide-react";
import { Smartphone, Computer } from "lucide-react";


import 'aos/dist/aos.css';
import serviceBanner from '../assets/pexels-divinetechygirl-1181396.jpg'; // Update with your actual image path
import {
  TrendingUp,

  Search,
  Newspaper,
  CircleDollarSign,
  ClipboardList,
  Camera,
  Lightbulb,
  BarChart4,
  Users2,
  MonitorSmartphone,
} from "lucide-react";
import { Mail, Phone, MapPin } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer';
const Services = () => {


  return (
    <div>
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
   <section
  className="relative text-center h-[100vh] py-20 flex justify-center flex-col items-center px-6 md:px-24 text-white bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      `linear-gradient(rgba(225,225,225,0.3), rgba(225,225,225,0.3)), url('${serviceBanner}')`,
  }}
>
  
  <div data-aos="fade-up">
      <h1 className="text-4xl md:text-5xl font-bold text-[#38622F] ">We Don’t Just Build — We Transform</h1>
    <div className="h-1 w-28 bg-[#38622F] mt-3 mb-6 mx-auto"></div>
    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
      Helping businesses grow with tailored digital marketing strategies designed for success.
    </p>
  </div>

</section>

{/*  horixontal line  */}


<section className="bg-gray-50 py-16 px-4 md:px-10">
  <h2 className="text-3xl md:text-4xl font-bold text-center  text-gray-800">
    Our Services
  </h2>
{/* Services Cards Section */}
    

<section className="bg-gray-50 py-12 px-6 md:px-[100px]">
 

<div className="py-12 px-4 bg-gray-50">
   <div className="max-w-5xl mx-auto grid gap-12 sm:grid-cols-1 md:grid-cols-2">
     
     {/* Mobile Development */}
     <div
       data-aos="fade-up"
       data-aos-delay="100"
       className="rounded-xl p-6 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center bg-green-100 hover:bg-green-300"
     >
       <div className="flex justify-center items-center mb-4">
         <Smartphone className="w-10 h-10 text-[#38622F]" />
       </div>
       <h3 className="text-xl font-bold text-gray-800">Mobile Development</h3>
       <p className="mt-2  mb-6 text-sm text-gray-700">
         Custom mobile apps with secure, user-friendly design and full-cycle development.
       </p>
       <Link
       to="/mobile-development"
       className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-black border-2 border-[#38622F] rounded-lg overflow-hidden group"
     >
       {/* Hover Animation */}
       <span className="absolute inset-y-0 right-0 w-0 bg-[#38622F] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
 
       {/* Button Content */}
       <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
        Explore Our Services <ArrowRight className="w-5 h-5" />
       </span>
     </Link>
     </div>
 
     {/* Website Development */}
     <div
       data-aos="fade-up"
       data-aos-delay="200"
       className="rounded-xl p-6 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center bg-blue-100 hover:bg-blue-300"
     >
       <div className="flex justify-center items-center mb-4">
         <Computer className="w-10 h-10 text-blue-600" />
       </div>
       <h3 className="text-xl font-bold text-gray-800">Website Development</h3>
       <p className="mt-2 mb-10 text-sm text-gray-700">
         Full-service web design and development with ongoing support.
       </p>
         <Link
       to="/website-development"
       className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-black border-2 border-blue-400 rounded-lg overflow-hidden group"
     >
       {/* Hover Animation */}
       <span className="absolute inset-y-0 right-0 w-0 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
 
       {/* Button Content */}
       <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
        Explore Our Services <ArrowRight className="w-5 h-5" />
       </span>
     </Link>
     </div>
 
   </div>
</div>

  {/*  section divider */}
               <div className="h-1 w-28 bg-[#38622F] mt-2 mb-6 mx-auto"></div>




          <div className="flex justify-center px-4 sm:px-6 py-8 sm:py-12">
  <div className="text-center">
    <p className="text-sm sm:text-base mb-12 md:text-2xl lg:text-3xl text-white bg-[#38622F] rounded px-4 sm:px-8 md:px-10 py-2">
      A LITTLE ABOUT OURSELVES
    </p>


    <p className='text-3xl md:text-5xl font-bold mb-5 '>Stories need to be woven into <span className='text-[#38622F]'>great tales</span></p>

             <div className="h-1 w-28 bg-[#38622F] mt-2 mb-6 mx-auto"></div>


             <p className='text-gray-600 text-lg mb-8'>
                and that is where we come in. We are small enough to enjoy the  smaller
accomplishments,  
<br />

but big enough to handle the larger projects. Our team is dedicated to crafting unique digital experiences that resonate with your audience and drive results.
             </p>

                <div>
                   <Link
      to="/portfolio"
      className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-black border-2 border-[#38622F] rounded-lg overflow-hidden group"
    >
      {/* Hover Animation */}
      <span className="absolute inset-y-0 right-0 w-0 bg-[#38622F] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
        Explore Our Body of Work's <ArrowRight className="w-5 h-5" />
      </span>
    </Link>

                </div>
  </div>
</div>

   

</section>

</section>



      


{/*  contact form  */}

      
  <div className="bg-white py-16 px-6 md:px-20" id="contact">
  <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">

    {/* Left Side */}
    <div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#38622F] mb-4">Ready To Get Started?</h2>
      <p className="text-gray-700 mb-10 max-w-md">
        Ready to boost your digital presence and drive business growth? Contact us today for tailored solutions that deliver real results! Let’s create something extraordinary together.
      </p>

      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="bg-green-700 text-white p-3 rounded-full">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-green-700 font-semibold">Email</h4>
            <a href="mailto:info@icehuttechnologies.com" className="text-gray-800 hover:underline">
              info@icehuttechnologies.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="bg-green-700 text-white p-3 rounded-full">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-green-700 font-semibold">Phone</h4>
            <a href="tel:+91 8209843003" className="text-gray-800 hover:underline">
              +91 8209843003
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <div className="bg-green-700 text-white p-3 rounded-full">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-green-700 font-semibold">Location</h4>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:underline"
            >
             Office 4, Radhika Vihar D, Near Iskcon Temple, Mansarovar, Jaipur 302020
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Right Side - Contact Form */}
    <div className="bg-white border border-purple-200 p-6 rounded-2xl shadow-md">
      <form className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="border rounded-md p-2 w-full" />
          <input type="email" placeholder="Email" className="border rounded-md p-2 w-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Phone" className="border rounded-md p-2 w-full" />
          <select className="border rounded-md p-2 w-full">
            <option>Services</option>
            <option>SEO</option>
            <option>Social Media</option>
            <option>Web Development</option>
            <option>App Development</option>
          </select>
        </div>
        <textarea rows="5" placeholder="Messages" className="border rounded-md p-2 w-full"></textarea>
        <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-800 transition-all">
          Send
        </button>
      </form>
    </div>
  </div>
</div>

{/*  newsletter */}

    <section className="bg-green-200 text-black py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Newsletter</h2>
        <p className="mb-8 text-base sm:text-lg">
          Subscribe to stay updated with our latest insights, offers, and solutions delivered straight to your inbox!
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center ">
      <div className='border-2 border-black rounded'>
            <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4  py-3 rounded-md text-black w-full sm:w-[400px] focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#38622F] hover:bg-green-700 text-white p-4 rounded transition duration-300"
          >
            <Send className="w-5 h-5" />
          </button>
      </div>
        </form>
      </div>
    </section>

{/*  here the footer starts */}


      <div>
        <Footer />
      </div>

    </div>
  );
};

export default Services;
