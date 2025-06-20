import React, { useEffect } from 'react';
import Navbar from '../Component/Navbar';
import AOS from 'aos';
import { Send } from "lucide-react";

import 'aos/dist/aos.css';
import serviceBanner from '../assets/pexels-divinetechygirl-1181396.jpg'; // Update with your actual image path
import {
  TrendingUp,
  Smartphone,
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
      `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${serviceBanner}')`,
  }}
>
  
    <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
    <div className="h-1 w-28 bg-green-500 mt-3 mb-6 mx-auto"></div>
    <p className="text-lg text-gray-200 max-w-2xl mx-auto">
      Helping businesses grow with tailored digital marketing strategies designed for success.
    </p>

</section>

{/*  horixontal line  */}


<section className="bg-gray-50 py-16 px-4 md:px-10">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Our Services</h2>

  <div className="relative w-full max-w-6xl mx-auto">
    {/* Horizontal Line (Desktop) */}
    <div className="hidden md:block absolute top-5 left-0 right-0 h-1 bg-green-500 z-0"></div>

    {/* Vertical Line (Mobile) */}
    <div className="md:hidden absolute left-6 top-0 bottom-0 w-1 bg-green-500 z-0"></div>

    {/* Steps */}
    <div className="flex md:flex-row flex-col md:justify-between relative z-10 gap-12 md:gap-0">

      {[
        "Digital Strategy",
        "SEO",
        "Social Media",
        "Technology & Design",
        "Media Buying",
        "Film & Production",
        "Performance Marketing",
        "Influencer Marketing",
      ].map((item, idx) => (
        <div
          key={idx}
          className="flex md:flex-col items-center md:items-center gap-4 md:w-auto w-full"
        >
          {/* Circle */}
          <div className="h-10 w-10 rounded-full bg-white border-4 border-green-600 text-green-600 font-bold flex items-center justify-center z-10 md:mx-auto ml-4">
            {idx + 1}
          </div>

          {/* Text */}
          <p className="text-sm font-medium text-gray-700 w-fit md:mt-4 md:text-center">{item}</p>
        </div>
      ))}

    </div>
  </div>
</section>


      {/* Services Cards Section */}
    

<section className="bg-gray-50 py-12 px-6 md:px-[100px]">
  <div className="max-w-7xl mb-[100px] mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

    {/* Performance Marketing */}
    <div data-aos="fade-up" className="rounded-xl p-6 shadow-md bg-blue-100 hover:bg-blue-300 text-center transition duration-300 hover:scale-105 hover:shadow-xl">
      <TrendingUp className="w-10 h-10 text-blue-500 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-800">Performance Marketing</h3>
      <p className="mt-2 text-sm">Data-driven campaigns optimizing ROI through targeted, measurable digital strategies.</p>
    </div>

    {/* Mobile Development */}
    <div data-aos="fade-up" data-aos-delay="100" className="rounded-xl p-6 shadow-md bg-green-100 hover:bg-green-300 text-center transition duration-300 hover:scale-105 hover:shadow-xl">
      <Smartphone className="w-10 h-10 text-green-500 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-800">Mobile Development</h3>
      <p className="mt-2 text-sm">Custom mobile apps with secure, user-friendly design and full-cycle development.</p>
    </div>

    {/* SEO Services */}
    <div data-aos="fade-up" data-aos-delay="200" className="rounded-xl p-6 shadow-md bg-purple-100 hover:bg-purple-300 text-center transition duration-300 hover:scale-105 hover:shadow-xl">
      <Search className="w-10 h-10 text-purple-500 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-800">SEO Services</h3>
      <p className="mt-2 text-sm">Enhancing website visibility, rankings, and traffic through content and optimization.</p>
    </div>

    {/* Social Media Marketing */}
    <div data-aos="fade-up" data-aos-delay="300" className="rounded-xl p-6 shadow-md bg-yellow-100 hover:bg-yellow-300 text-center transition duration-300 hover:scale-105 hover:shadow-xl">
      <Newspaper className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-800">Social Media Marketing</h3>
      <p className="mt-2 text-sm">Profile optimization, content creation, engagement & analytics to boost presence.</p>
    </div>

    {/* Website Development */}
    <div data-aos="fade-up" data-aos-delay="400" className="rounded-xl p-6 shadow-md bg-green-100 hover:bg-green-300 text-center transition duration-300 hover:scale-105 hover:shadow-xl">
      <CircleDollarSign className="w-10 h-10 text-green-500 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-800">Website Development</h3>
      <p className="mt-2 text-sm">Full-service web design and development with ongoing support.</p>
    </div>

    {/* PPC Advertising */}
    <div data-aos="fade-up" data-aos-delay="500" className="rounded-xl p-6 shadow-md bg-pink-100 hover:bg-pink-300 text-center transition duration-300 hover:scale-105 hover:shadow-xl">
      <ClipboardList className="w-10 h-10 text-pink-500 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-800">PPC Advertising</h3>
      <p className="mt-2 text-sm">Traffic-boosting campaigns with strategic keywords, ads, and ROI tracking.</p>
    </div>

    {/* Digital Strategy */}
    <div data-aos="fade-up" data-aos-delay="600" className="rounded-xl p-6 shadow-md bg-indigo-100 hover:bg-indigo-300 text-center transition duration-300 hover:scale-105 hover:shadow-xl">
      <Lightbulb className="w-10 h-10 text-indigo-500 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-800">Digital Strategy</h3>
      <p className="mt-2 text-sm">Strategic planning to align business goals with digital channels for maximum impact.</p>
    </div>

    {/* Technology & Design */}
    <div data-aos="fade-up" data-aos-delay="700" className="rounded-xl p-6 shadow-md bg-teal-100 hover:bg-teal-300 text-center transition duration-300 hover:scale-105 hover:shadow-xl">
      <MonitorSmartphone className="w-10 h-10 text-teal-500 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-800">Technology & Design</h3>
      <p className="mt-2 text-sm">Crafting elegant UI/UX with cutting-edge technologies for digital platforms.</p>
    </div>

    {/* Media Buying */}
    <div data-aos="fade-up" data-aos-delay="800" className="rounded-xl p-6 shadow-md bg-orange-100 hover:bg-orange-300 text-center transition duration-300 hover:scale-105 hover:shadow-xl">
      <BarChart4 className="w-10 h-10 text-orange-500 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-800">Media Buying</h3>
      <p className="mt-2 text-sm">Smart media planning to maximize reach and optimize ad spend across platforms.</p>
    </div>

    {/* Film & Production */}
    <div data-aos="fade-up" data-aos-delay="900" className="rounded-xl p-6 shadow-md bg-red-100 hover:bg-red-300 text-center transition duration-300 hover:scale-105 hover:shadow-xl">
      <Camera className="w-10 h-10 text-red-500 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-800">Film & Production</h3>
      <p className="mt-2 text-sm">Creating engaging visual content including ads, shorts, and storytelling videos.</p>
    </div>

    {/* Influencer Marketing */}
    <div data-aos="fade-up" data-aos-delay="1000" className="rounded-xl p-6 shadow-md bg-yellow-100 hover:bg-yellow-300 text-center transition duration-300 hover:scale-105 hover:shadow-xl">
      <Users2 className="w-10 h-10 text-yellow-600 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-800">Influencer Marketing</h3>
      <p className="mt-2 text-sm">Leverage industry voices to build trust, reach new audiences, and grow faster.</p>
    </div>




    

  </div>

  {/*  section divider */}
               <div className="h-1 w-28 bg-green-500 mt-2 mb-6 mx-auto"></div>




          <div className="flex justify-center px-4 sm:px-6 py-8 sm:py-12">
  <div className="text-center">
    <p className="text-sm sm:text-base mb-12 md:text-2xl lg:text-3xl text-white bg-green-500 rounded px-4 sm:px-8 md:px-10 py-2">
      A LITTLE ABOUT OURSELVES
    </p>


    <p className='text-3xl md:text-5xl font-bold mb-5 '>Stories need to be woven into <span className='text-green-500'>great tales</span></p>

             <div className="h-1 w-28 bg-green-500 mt-2 mb-6 mx-auto"></div>


             <p className='text-gray-600 text-lg mb-8'>
                and that is where we come in. We are small enough to enjoy the  smaller
accomplishments,  
<br />

but big enough to handle the larger projects. Our team is dedicated to crafting unique digital experiences that resonate with your audience and drive results.
             </p>

                <div>
                   <Link
      to="/portfolio"
      className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-black border-2 border-green-400 rounded-lg overflow-hidden group"
    >
      {/* Hover Animation */}
      <span className="absolute inset-y-0 right-0 w-0 bg-green-500 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
        Explore Our Body of Work's <ArrowRight className="w-5 h-5" />
      </span>
    </Link>

                </div>
  </div>
</div>

   

</section>


{/*  contact form  */}

      
  <div className="bg-white py-16 px-6 md:px-20" id="contact">
  <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">

    {/* Left Side */}
    <div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-500 mb-4">Ready To Get Started?</h2>
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
            className="bg-green-500 hover:bg-green-700 text-white p-4 rounded transition duration-300"
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
