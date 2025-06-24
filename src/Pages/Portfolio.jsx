import React from "react";
import { Eye, ExternalLink, Calendar, Users, LayoutTemplate } from "lucide-react";
import Navbar from "../Component/Navbar";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import portfolioImage from "../assets/pexels-divinetechygirl-1181396.jpg"
import ClientLogos from "../Component/ClientLogos"
import ImageSwiper from "../Component/ImageSwiper";
import img1 from "../assets/about_icon01.png";
import Footer from "../Component/Footer";
const portfolioData = [
  {
    title: "Digital Marketing Campaign",
    description: "Boosted sales by 150% using strategic ads & SEO.",
    image: "https://source.unsplash.com/800x600/?marketing",
    category: "Marketing",
    client: "ABC Corp",
    date: "March 2024",
    link: "#",
  },
  {
    title: "Modern E-commerce Website",
    description: "Launched a sleek shopping platform with custom CMS.",
    image: "https://source.unsplash.com/800x600/?ecommerce",
    category: "Web Development",
    client: "UrbanStyle",
    date: "January 2024",
    link: "#",
  },
  {
    title: "Social Media Strategy",
    description: "Increased engagement by 300% across platforms.",
    image: "https://source.unsplash.com/800x600/?socialmedia",
    category: "Social Media",
    client: "GlowUp Agency",
    date: "February 2024",
    link: "#",
  },
  {
    title: "Mobile App for Logistics",
    description: "Developed scalable app with real-time tracking.",
    image: "https://source.unsplash.com/800x600/?app,logistics",
    category: "App Development",
    client: "FastTrack",
    date: "April 2024",
    link: "#",
  },
];



  const serviceImages = [img1, img1, img1, img1];

const Portfolio = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-center items-center h-[100vh] bg-cover bg-center bg-no-repeat text-white text-center"
        style={{
          backgroundImage:
            `linear-gradient(rgba(225,225,225,0.3), rgba(225,225,225,0.3)), url(${portfolioImage})`,
        }}
      >

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#38622F]">Explore Our Work</h1>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Showcasing innovative, results-driven projects in design, tech, and strategy.
        </p>

      </section>

      {/* Intro */}
      <section className="py-12 px-6 md:px-24 bg-gray-50 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#38622F]">What We Deliver</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          From idea to execution, our team brings digital visions to life through modern UI, seamless UX, and strategic growth.
        </p>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-6 md:px-24 bg-gray-50">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {portfolioData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl overflow-hidden group transition-all"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <LayoutTemplate className="w-5 h-5 text-green-600" /> {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-green-600" /> {item.client}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-green-600" /> {item.date}
                  </span>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs px-3 py-1 bg-green-100 text-[#38622F] rounded-full">
                    {item.category}
                  </span>
                  <a
                    href={item.link}
                    className="text-[#38622F] hover:underline flex items-center gap-1"
                  >
                    View <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-100 text-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Want to See More?</h2>
        <p className="mt-3 mb-8 text-lg">Let’s talk about how we can bring your project to life.</p>

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
      </section>



      {/*  here the small slider  */}



      <div className="text-center py-12 bg-gray-50 w-full ">
        <h1 className="text-[#38622F] text-3xl mb-6 md:text-5xl">You Demand, <br />
          We Strategize & Deliver</h1>


        <p className="text-gray-700 max-w-7xl mx-auto font-light text-lg">It is always tricky to crack a perfect combination of delivering measurable performance and targeting the right audience in the digital hyperspace, but the media specialists at Digitale exactly knows how to make your brand tick!

        </p>


        <div className="mt-12">
          <ImageSwiper images={serviceImages} />
        </div>
      </div>


      {/*  footer section */}


      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
