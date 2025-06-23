import React from 'react'
import Navbar from '../Component/Navbar'
import heroVideo from  '../assets/3196062-uhd_3840_2160_25fps.mp4'
import { Brush, ShieldCheck, BarChart2, Trophy } from "lucide-react";
// import oneImage from '../assets/yarn_img.png'
import { Smartphone, Computer } from "lucide-react";
import twoImage from '../assets/2-12.png'
import TestimonialSlider from '../Component/TestimonialSlider'
import {
  TrendingUp,
  Search,
  Newspaper,
  CircleDollarSign,
  ClipboardList,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone } from "lucide-react"
import Footer from '../Component/Footer';
import ClientLogos from '../Component/ClientLogos';
 
const Home = () => {
  return (
    <div>

        <div>
            <Navbar />
        </div>
      
      {/*  hero banner */}


  <div id='home' className="relative w-full h-screen overflow-hidden flex items-center justify-center">

  {/* 🔹 Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full opacity-40 object-cover z-0"
  >
    <source src={heroVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* 🔹 Main Text Content */}
  <div className="relative z-10 text-center px-6 py-16 sm:py-24  text-black" data-aos="fade-up">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-500 to-green-900">
    We don’t just build websites or apps — we build digital journeys
  </h1>

  <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
    Ice Hut Technologies is a team of developers, designers, and dreamers who turn code into impactful experiences.
  </p>


  <div
  className='mt-12 flex gap-8 justify-center'>
   <a
  href="tel:+91 8209843003" // Replace with your actual WhatsApp number
  target="_blank"
  rel="noopener noreferrer"
  className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-black border-2 border-green-400 rounded-lg overflow-hidden group"
>
  {/* Hover Animation */}
  <span className="absolute inset-y-0 right-0 w-0 bg-green-500 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>

  {/* Button Content */}
  <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
    Get a Free Quote <ArrowRight className="w-5 h-5" />
  </span>
</a>


    <Link
      to="/services"
      className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-black border-2 border-green-400 rounded-lg overflow-hidden group"
    >
      {/* Hover Animation */}
      <span className="absolute inset-y-0 right-0 w-0 bg-green-500 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
       Explore Our Services <ArrowRight className="w-5 h-5" />
      </span>
    </Link>
  </div>
</div>


</div>

{/*  another secton strts  */}


<div id='about' className="w-full px-6 py-12 md:p-[100px] bg-gray-50">
  <div className="container mx-auto  flex flex-col lg:flex-row gap-12">

    {/* Left Text Content */}
    <div className="lg:w-5/12 space-y-4">
      <span className="bg-green-100 text-green-500 px-4 py-1 rounded-full text-sm font-medium inline-block">
        About Us
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Your Digital Growth Partner
      </h2>
      <p className="text-gray-700 mb-8 leading-relaxed">
       At ICE Hut Technology, our mission is to empower businesses with innovative digital solutions that drive growth and success. We are committed to delivering exceptional service, fostering creativity, and building lasting partnerships with our clients.
      </p>
      <Link
      to="/about"
      className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-black border-2 border-green-400 rounded-lg overflow-hidden group"
    >
      {/* Hover Animation */}
      <span className="absolute inset-y-0 right-0 w-0 bg-green-500 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
      Learn more <ArrowRight className="w-5 h-5" />
      </span>
    </Link>
    </div>

    {/* Right Cards */}
  <div className="lg:w-7/12 w-full flex flex-col sm:flex-row gap-6">
  {/* Column 1 */}
  <div className="flex flex-col gap-6 w-full sm:w-1/2">
    {/* Card 1 */}
   <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 transform hover:scale-105 hover:shadow-lg group">
  <div className="w-12 h-12 bg-green-200 group-hover:bg-green-400 rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
    <Brush className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
  </div>
  <h4 className="text-lg font-semibold text-gray-900">Creative Solutions</h4>
  <p className="text-sm text-gray-600 mt-2">
    We craft innovative and personalized strategies tailored to each client’s unique needs, ensuring impactful online experiences.
  </p>
</div>

    {/* Card 3 */}
  <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 transform hover:scale-105 hover:shadow-lg group">
  <div className="w-12 h-12 bg-green-200 group-hover:bg-green-400 rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
    <ShieldCheck className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
  </div>
  <h4 className="text-lg font-semibold text-gray-900">Security & Trust</h4>
  <p className="text-sm text-gray-600 mt-2">
    We prioritize the safety and integrity of your digital assets, implementing secure practices to safeguard your brand’s reputation.
  </p>
</div>

  </div>

  {/* Column 2 */}
  <div className="flex flex-col gap-6 w-full sm:w-1/2">
    {/* Card 2 */}
   <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 transform hover:scale-105 hover:shadow-lg group">
  <div className="w-12 h-12 bg-green-200 group-hover:bg-green-400 rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
    <BarChart2 className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
  </div>
  <h4 className="text-lg font-semibold text-gray-900">Data-Driven Strategies</h4>
  <p className="text-sm text-gray-600 mt-2">
    Our strategies are fueled by data. We analyze key metrics and adapt campaigns for maximum results.
  </p>
</div>

    {/* Card 4 */}
    <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 transform hover:scale-105 hover:shadow-lg group">
  <div className="w-12 h-12 bg-green-200 group-hover:bg-green-400 rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
    <Trophy className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
  </div>
  <h4 className="text-lg font-semibold text-gray-900">Results-Oriented</h4>
  <p className="text-sm text-gray-600 mt-2">
    Our focus is on achieving tangible results — from increased traffic to higher conversions.
  </p>
</div>

  </div>
</div>

  </div>
</div>





{/* ends hgere  */}

{/*  anther section starts her e */}


<div className='w-full px-2 py-8 md:px-[100px] bg-gray-50'>
    <div className='max-w-6xl text-center mx-auto bg-green-500 rounded-lg p-8'>
        <h1 className='text-3xl md:text-4xl font-bold text-white'>
          Our Mission
        </h1>
        <p className='text-white mt-4'>
       To help businesses thrive in the ever-evolving digital landscape via personalized web,
mobile, and marketing platforms, all while ensuring strong confidentiality,
innovation, and client focus.

        </p>
    </div>
</div>

{/*  here the client expectations meeets  */}


<div className="py-20 bg-gray-50 " data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

    {/* Left Side - Image */}
    <div className="flex justify-center">
      <img
        src={twoImage}
        alt="Client Benefits"
        className="w-full max-w-md rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
      />
    </div>

    {/* Right Side - Content */}
    <div>
      <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-700 to-green-900 mb-6">
        Why Clients Choose Us
      </h2>

      <p className="text-gray-600 text-base mb-6">
        At Ice Hut Technologies, we craft digital experiences that deliver real business impact. Here's what sets us apart:
      </p>

      <ul className="space-y-4 text-gray-800 text-base leading-relaxed">
        <li className="flex items-start gap-3 group">
          <span className="text-green-500 text-xl">🚀</span>
          <span className="group-hover:text-green-600 transition-colors">Creative Meets Code</span>
        </li>
        <li className="flex items-start gap-3 group">
          <span className="text-blue-500 text-xl">📈</span>
          <span className="group-hover:text-blue-600 transition-colors">Built for Scale</span>
        </li>
        <li className="flex items-start gap-3 group">
          <span className="text-purple-500 text-xl">🎯</span>
          <span className="group-hover:text-purple-600 transition-colors">Results-Focused</span>
        </li>
        <li className="flex items-start gap-3 group">
          <span className="text-pink-500 text-xl">🤝</span>
          <span className="group-hover:text-pink-600 transition-colors">People First</span>
        </li>
      </ul>
    </div>

  </div>


</div>


    




{/*  another section  starts from here  */}
{/* <div className="flex flex-col md:flex-row items-center gap-8 px-6 py-12 md:px-16 md:py-20 bg-gray-50">
  {/* Left Image
  <div className="w-full md:w-1/2 flex justify-center">
    <img src={oneImage} alt="Yarn" className="max-w-[300px] md:max-w-[400px] w-full" />
  </div>

  {/* Right Text 
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
      We Spin the digital yarn &<br />
      <span className="text-green-500">Weave Your Story</span>
    </h2>
    <div className="h-1 w-28 bg-green-500 mt-2 mb-4 mx-auto md:mx-0"></div>
    <p className="text-gray-700 text-base md:text-lg">
      From ideation to tangible results, we as a digital marketing agency deliver the whole package.
      But first, we strive to understand your brand essence and create a customized digital experience.
    </p>
  </div>
</div> */}

{/*  another section starts  */}



{/* <div className="relative w-full  h-auto bg-green-50 flex items-center justify-center overflow-hidden px-4">

  <div className="absolute z-10 text-center px-4">
    <h2 className="text-green-400 text-2xl sm:text-4xl md:text-6xl font-light leading-tight">
      create the best<br />
      <span className="font-semibold">of the internet</span>
    </h2>
  </div>


  <div className="relative mx-auto w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
    {[
      { label: 'Website & Mobile', src: twoImage, style: 'top-0 left-1/2 -translate-x-1/2' },
      { label: 'Animation & Motion', src: twoImage, style: 'top-[15%] right-0 translate-x-1/2' },
      { label: 'Ads & Media', src: twoImage, style: 'bottom-[15%] right-0 translate-x-1/2' },
      { label: 'Video', src: twoImage, style: 'bottom-0 left-1/2 -translate-x-1/2' },
      { label: 'Naka Campaign', src: twoImage, style: 'bottom-[15%] left-0 -translate-x-1/2' },
      { label: 'Metaverse Virtual', src: twoImage, style: 'top-[15%] left-0 -translate-x-1/2' },
    ].map((item, i) => (
      <div key={i} className={`absolute ${item.style} text-center`}>
        <div className="group w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg border-4 border-green-500 transform transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-green-300">
          <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
        </div>
        <p className="text-xs sm:text-sm text-black mt-2 font-medium w-24 sm:w-28">{item.label}</p>
      </div>
    ))}
  </div>
</div> */}


<div id='services' className='bg-gray-50 px-6 py-12 md:px-[100px] '>
    <div className='flex justify-center items-center flex-col'>
        <h1 className='text-3xl md:text-4xl font-bold'>Our Services </h1>
         <div className="h-1 w-28 bg-green-500 mt-2 mb-4 mx-auto md:mx-0"></div>


         <p>Helping businesses grow with tailored digital marketing strategies designed for success.</p>
      
    </div>

 
    

<div className="py-12 px-4 bg-gray-50">
  <div className="max-w-5xl mx-auto grid gap-12 sm:grid-cols-1 md:grid-cols-2">
    
    {/* Mobile Development */}
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="rounded-xl p-6 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center bg-green-100 hover:bg-green-300"
    >
      <div className="flex justify-center items-center mb-4">
        <Smartphone className="w-10 h-10 text-green-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">Mobile Development</h3>
      <p className="mt-2  mb-6 text-sm text-gray-700">
        Custom mobile apps with secure, user-friendly design and full-cycle development.
      </p>
      <Link
      to="/mobile-development"
      className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-black border-2 border-green-400 rounded-lg overflow-hidden group"
    >
      {/* Hover Animation */}
      <span className="absolute inset-y-0 right-0 w-0 bg-green-500 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>

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



</div>


{/*  anothr secton starts */}


<div id='portfolio' className="bg-gray-100 py-16 px-6 md:px-20">
  <h2 className="md:text-4xl text-2xl font-bold text-center  mb-10">Transforming Ideas Into Reality</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    
    {/* Project 1 */}
    <a href="https://project-one.com" target="_blank" rel="noopener noreferrer" data-aos="fade-up">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
        <img
          src="https://via.placeholder.com/400x200"
          alt="Project 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-green-500 mb-2">Project One</h3>
          <p className="text-gray-600 text-sm">A modern website built using React and Tailwind CSS with responsive design.</p>
        </div>
      </div>
    </a>

    {/* Project 2 */}
    <a href="https://project-two.com" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="100">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
        <img
          src="https://via.placeholder.com/400x200"
          alt="Project 2"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-green-500 mb-2">Project Two</h3>
          <p className="text-gray-600 text-sm">E-commerce platform with product pages and payment integration.</p>
        </div>
      </div>
    </a>

    {/* Project 3 */}
    <a href="https://project-three.com" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="200">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
        <img
          src="https://via.placeholder.com/400x200"
          alt="Project 3"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-green-500 mb-2">Project Three</h3>
          <p className="text-gray-600 text-sm">Animated portfolio with smooth scroll and interactive elements.</p>
        </div>
      </div>
    </a>

  </div>
</div>



{/*  her the another starts  */}


<div className=" w-full bg-green-100 md:p-[100px] px-6 py-12">
  <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
    
    {/* Text Section */}
    <div className="lg:w-1/2 text-center lg:text-left">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500 leading-tight">
        Listen to what our clients have to say.
      </h1>
      <p className="mt-4 text-sm sm:text-base text-gray-600">
        We are proud to work with some of our clients for over 8+ years. We offer advertising,
        social media marketing, influencer marketing, video marketing, online reputation
        management services, etc.
      </p>
    </div>

    {/* Slider Section */}
    <div className="lg:w-1/2 w-full">
      <TestimonialSlider />
    </div>

  </div>
</div>

{/*  image scroller  */}

  <div className="logos">
      <h2>Our Recruiters</h2>

     <ClientLogos />
    </div>




{/*  contact page  */}


<div className="bg-gray-50 py-16 px-6 md:px-20" id="contact">
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


<Footer />


    </div>
  )
}

export default Home
