import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { ArrowRight } from "lucide-react";

import heroImage from "../assets/pexels-divinetechygirl-1181396.jpg";
import twoImage from "../assets/19.png";


import { Smartphone, Apple } from "lucide-react"; // add this at the top if not already present


const services = [
  {
    title: "Custom Web Development",
    desc: "We create tailored websites that reflect your brand and engage users.",
    icon: "📱",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Full-featured e-commerce websites with secure checkout and product management.",
    icon: "🛒",
  },
  {
    title: "Business & Corporate Websites",
    desc: "Tailored websites built to reflect your brand and connect with your audience.",
    icon: "🌐",
  },
  {
    title: "CMS-Based Websites",
    desc: "Easy-to-manage sites using CMS platforms.",
    icon: "🛠️",
  },
];

const projects = [
  {
    title: "Nexus Job Portal",
    description: "Job listing platform with resume uploads and admin panel.",
    tech: ["React", "Tailwind", "PHP"],
    // image: project1,
    link: "https://www.nexusjobs.in/",
  },
  {
    title: "Men’s Clothing Store",
    description: "A stylish e-commerce site for men's fashion wear.",
    tech: ["React", "Bootstrap"],
    // image: project2,
    link: "#",
  },
  {
    title: "Photography Website",
    description: "A modern gallery site with portfolio and contact section.",
    tech: ["React", "Tailwind"],
    // image: project3,
    link: "#",
  },
];



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

const WebsiteDevelopmentPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=" text-gray-800">
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative text-center h-[100vh] py-20 flex justify-center flex-col items-center px-6 md:px-24 text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,
        }}
      >
        <div data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-green-700">
            Web Development Services
          </h1>
          <div className="h-1 w-28 bg-green-500 mt-3 mb-6 mx-auto"></div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Your website is your digital first impression — we make sure it’s unforgettable.
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

      {/* SERVICES SECTION */}
      <section className="py-20 px-6 md:px-20 bg-white" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-14">Our Web Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-gray-100 p-8 rounded-xl shadow-md hover:shadow-xl transition"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>



      {/*  her is the illustation section  */}



  <section className="relative bg-gradient-to-b from-[#2e2e92] to-[#000] text-white">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path
              d="M0,0V46.29c47.38,22.07,103.78,34.94,161,34.17,54.86-.73,110.27-17.94,164-35.23C432.39,24.27,487.2,5.7,541,6.09c58.26.44,113.71,23.19,171,35.71,55.52,12.14,113.19,10.45,168-1.38,48.44-10.43,95.59-27.82,143-39.84V0Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative mt-12 z-10 max-w-7xl text-center mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Experience the State of the Art Education Portal
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-white mb-10">
            We enhance education quality through partnerships with reputed institutions, offering
            tailored, science-based language curriculums for diverse needs.
          </p>
          <img src={twoImage} alt="Illustration" className="mx-auto w-full max-w-7xl " />
        </div>
      </section>


    

      {/* PROJECTS SECTION */}
      <section className="py-20 px-6 md:px-20 bg-gray-50" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-14">Our Projects</h2>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-xl rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* <img src={project.image} alt={project.title} className="w-full h-56 object-cover" /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
                >
                  View Project
                </a>
              </div>
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

      

      {/*  footer section */}
      <Footer />
    </div>
  );
};

export default WebsiteDevelopmentPage;
