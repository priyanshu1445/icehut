import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { Send } from "lucide-react";
import twoImage from '../assets/4-1-e1741368306652.png';

import aboutBg from '../assets/19.png';
import about1 from '../assets/about_icon01.png';
import about2 from '../assets/about_icon02.png';
import about3 from '../assets/about_icon03.png';
import Navbar from '../Component/Navbar';
import { ArrowRight } from "lucide-react";
import Footer from '../Component/Footer';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative w-full h-[100vh] bg-cover opacity-50 bg-center bg-fixed flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(225,225,225,0.3), rgba(225,225,225,0.3)), url(${aboutBg})`,
        }}
        data-aos="fade-up"
      >
        <div className="relative z-10 text-center px-4 text-white">
          <h1 className="text-2xl md:text-5xl font-bold mb-4 text-[#38622F]">
           The Best Digital Solutions with 10 Years of Experience
          </h1>
          <p className="max-w-xl text-gray-700 mx-auto text-sm md:text-base">
            Discover who we are, what we do, and how we help shape your digital future.
          </p>
        </div>
      </div>




      <div className="py-20 bg-gradient-to-b from-white via-slate-50 to-white" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

  

    {/* Right Side - Content */}
    <div>
      <h2 className="text-3xl sm:text-5xl font-extrabold text-[#38622F] mb-6">
        Why Choose Us
      </h2>

      <p className="text-gray-600 text-base mb-6">
        At Ice Hut Technologies, we believe in delivering more than just code. We build impactful, scalable, and human-centered digital experiences tailored to your business needs.
      </p>

      <ul className="space-y-4 text-gray-800 text-[16px] leading-relaxed font-medium">
        <li className="flex items-start gap-3 group">
          <span className="text-[#38622F] text-xl">✅</span>
          <span className="group-hover:text-green-600 transition-colors">Creative Meets Code</span>
        </li>
        <li className="flex items-start gap-3 group">
          <span className="text-blue-500 text-xl">🛠</span>
          <span className="group-hover:text-blue-600 transition-colors">Built for Scale</span>
        </li>
        <li className="flex items-start gap-3 group">
          <span className="text-purple-500 text-xl">📈</span>
          <span className="group-hover:text-purple-600 transition-colors">Results-Focused</span>
        </li>
        <li className="flex items-start gap-3 group">
          <span className="text-pink-500 text-xl">💻</span>
          <span className="group-hover:text-pink-600 transition-colors">People First</span>
        </li>
        <li className="flex items-start gap-3 group">
          <span className="text-yellow-500 text-xl">🚀</span>
          <span className="group-hover:text-yellow-600 transition-colors">Fast Turnaround & Agile Methodology</span>
        </li>
        <li className="flex items-start gap-3 group">
          <span className="text-red-500 text-xl">🤝</span>
          <span className="group-hover:text-red-600 transition-colors">Long-Term Client Relationships</span>
        </li>
      </ul>
    </div>
      {/* Left Side - Image */}
    <div className="flex justify-center">
      <img
        src={twoImage}
        alt="Why Choose Us"
        className="w-full max-w-md transition-transform duration-300 hover:scale-105"
      />
    </div>

  </div>
</div>


      {/* About Intro */}
      <div className="px-4 py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-2xl md:text-3xl font-semibold">About us</h1>
          <div className="h-1 w-28 bg-[#38622F] mt-2 mb-6 mx-auto"></div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            We are a part of <br />
            <span className="text-[#38622F]">Digitally-Fluent Workforce</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base mx-auto">
            At IceHut Technology, we are a team of passionate professionals dedicated to delivering
            innovative web solutions. Our expertise spans across web development, design, and digital
            marketing, ensuring that your online presence is not just functional but also impactful.
            We believe in the power of technology to transform businesses and are committed to
            helping you achieve your digital goals with excellence and integrity.
          </p>
        </div>




        {/* Section 1 – Who We Are */}
        <div
          className="max-w-6xl mx-auto mt-12 md:py-[100px] flex flex-col md:flex-row items-center gap-8 px-4"
          data-aos="fade-up"
        >
            <div className="w-full flex justify-center sm:w-1/4">
            <img src={about1} alt="About Illustration" className="w-[200px]" />
          </div>
          <div className="w-full md:w-3/4 text-center md:text-left">
            <h2 className="text-2xl md:text-5xl text-[#38622F] font-bold mb-4">Who we are?</h2>
            <p className="text-gray-600 text-sm md:text-base">
              Creativity ignites when we are empowered to be our fullest. As a Digital Marketing
              Company, our flexible yet solid work ethic pivots the way for innovative solutions based
              on discussion and meticulous research to find the smaller insights. Our team combines
              minds from diverse perspectives to create in-roads and deliver experiences that simply
              standout.
            </p>
          </div>
        </div>

        {/* Section 2 – Our Origin */}
        <div
          className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row items-center gap-8 px-4"
          data-aos="fade-up"
        >
          <div className="w-full md:w-3/4 text-center md:text-right order-2">
            <h2 className="text-2xl md:text-5xl text-[#38622F] font-bold mb-4">Curious About Our Origin?</h2>
            <p className="text-gray-600 text-sm md:text-base">
              We, as a workforce, are ever-changing with the changing times and culture. While we are known to
              keep up with the trends, our sense of discipline and practicality stems from the 30-year experience
              of our parent company - Lookad India Pvt Ltd. As a result, we are the perfect cross-breed of
              experience and innovation. We are able to craft thumb-stopping content that enhances brand identity
              through digital touchpoints.
            </p>
          </div>
          <div className="w-full flex justify-center sm:w-1/4 md:order-2">
            <img src={about2} alt="About Illustration" className="w-[200px]" />
          </div>
        </div>

        {/* Section 3 – How Do We Do It */}
        <div
          className="max-w-6xl mx-auto mt-12 md:py-[100px] flex flex-col md:flex-row items-center gap-8 px-4"
          data-aos="fade-up"
        >
          <div className="w-full flex justify-center sm:w-1/4">
            <img src={about3} alt="About Illustration" className="w-[200px]" />
          </div>
          <div className="w-full md:w-3/4 text-center md:text-left">
            <h2 className="text-2xl md:text-5xl text-[#38622F] font-bold mb-4">How do we do it?</h2>
            <p className="text-gray-600 text-sm md:text-base">
              We are a collective genius of minds united towards one common goal – the unprecedented success
              of our client campaigns and communication. Be it brand strategy or media-led campaigns, our
              approach is backed by a youthful, proactive vibe that allows you to grow current markets while
              anticipating new ones. We like being ahead of the curve!
            </p>
          </div>
        </div>

        {/* Section Divider */}
             <div className="h-1 w-28 bg-[#38622F] mt-2 mb-6 mx-auto"></div>




          <div className="flex justify-center px-4 sm:px-6 py-8 sm:py-12">
  <div className="text-center">
    <p className="text-sm sm:text-base mb-12 md:text-2xl lg:text-3xl text-white bg-[#38622F] rounded px-4 sm:px-8 md:px-10 py-2">
      A LITTLE ABOUT OURSELVES
    </p>


    <p className='text-3xl md:text-5xl font-bold mb-5 '>Stories need to be woven into <span className='text-[#38622F]'>great tales</span></p>

             <div className="h-1 w-28 bg-[#38622F] mt-2 mb-6 mx-auto"></div>


             <p className='text-gray-600 text-lg mb-8'>
                and that is where we come in. We are small enough to enjoy the <br /> smaller
accomplishments,
             </p>

                <div>
                   <Link
      to="/services"
      className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-black border-2 border-green-400 rounded-lg overflow-hidden group"
    >
      {/* Hover Animation */}
      <span className="absolute inset-y-0 right-0 w-0 bg-[#38622F] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
        Let's Go Viral <ArrowRight className="w-5 h-5" />
      </span>
    </Link>

                </div>
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



    {/*  here the footer section starts fromm here  */}


    <div>
        <Footer />
    </div>
    </div>
  );
};

export default About;
