import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Smartphone, Apple } from "lucide-react"; // add this at the top if not already present

import { Mail, Phone, MapPin } from "lucide-react";

import heroImage from "../assets/19.png"; // use your own mobile background image

import {

  ShieldCheck,
  Settings,
  TrendingUp,
  Layers3,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: <Smartphone className="w-10 h-10 text-indigo-600" />,
    title: "Cross-Platform Apps",
    desc: "Build high-performance apps that work seamlessly on both iOS and Android.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
    title: "Security First",
    desc: "We prioritize app security from day one using industry best practices.",
  },
  {
    icon: <Settings className="w-10 h-10 text-blue-600" />,
    title: "Custom Development",
    desc: "Tailored mobile solutions that align with your brand, audience, and goals.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-pink-600" />,
    title: "Optimized for Growth",
    desc: "Built-in analytics, SEO, and performance optimization for long-term success.",
  },
  {
    icon: <Layers3 className="w-10 h-10 text-yellow-600" />,
    title: "UI/UX Design",
    desc: "Intuitive user interfaces that provide seamless and engaging experiences.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-red-600" />,
    title: "Launch & Support",
    desc: "Full support from development to launch and beyond with maintenance options.",
  },
];

const MobileDevelopmentPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section
        className="relative text-center h-[90vh] py-24 px-4 flex justify-center flex-col items-center bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})`,
        }}
      >
        <div data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4  text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-green-700">
            Mobile App Development
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200">
           Build apps that are fast, smooth, and ready for tomorrow.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-14 text-gray-800">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-green-100 text-black" data-aos="zoom-in">
        <h3 className="text-3xl font-bold mb-4">Ready to Build Your Mobile App?</h3>
        <p className="mb-6 text-lg">Let’s create something impactful together.</p>
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
      </section>


      {/*  her the service section  */}


      {/* PLATFORM SERVICES SECTION */}
<section className="py-20 px-6 md:px-20 bg-white" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
    Platforms We Develop For
  </h2>

  <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
    {/* Android Development */}
    <div className="bg-green-50 hover:bg-green-100 p-8 rounded-xl shadow-md text-center transition duration-300 transform hover:scale-105">
      <div className="flex justify-center items-center mb-4">
        <Smartphone className="w-10 h-10 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Android Development</h3>
      <p className="text-sm text-gray-600 mb-4">
        We build fast, scalable, and secure Android applications using modern frameworks like Kotlin and React Native.
      </p>
      <a href="#contact" className="inline-block text-sm font-semibold text-green-600 hover:underline">
        Learn More
      </a>
    </div>

    {/* iOS Development */}
    <div className="bg-blue-50 hover:bg-blue-100 p-8 rounded-xl shadow-md text-center transition duration-300 transform hover:scale-105">
      <div className="flex justify-center items-center mb-4">
        <Apple className="w-10 h-10 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">iOS Development</h3>
      <p className="text-sm text-gray-600 mb-4">
        Elegant and robust iOS apps crafted with Swift and optimized for every Apple device — from iPhones to iPads.
      </p>
      <a href="#contact" className="inline-block text-sm font-semibold text-blue-600 hover:underline">
        Learn More
      </a>
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


      <Footer />
    </div>
  );
};

export default MobileDevelopmentPage;
