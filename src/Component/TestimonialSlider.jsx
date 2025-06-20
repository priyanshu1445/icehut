import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';

const testimonials = [
  {
    name: 'Priyanshu Soni',
    title: 'Founder, Pact Pulse Solution',
    image: 'https://i.pravatar.cc/100?img=32',
    message:
      'Working with this team has been an incredible experience. Their professionalism and creativity helped our brand reach new heights!',
  },
  {
    name: 'Aarav Sharma',
    title: 'Marketing Head, Nexus Job',
    image: 'https://i.pravatar.cc/100?img=12',
    message:
      'Outstanding results! They truly understand digital marketing and customer engagement like no one else.',
  },
  {
    name: 'Kavya Mehta',
    title: 'CEO, Mehta Media',
    image: 'https://i.pravatar.cc/100?img=15',
    message:
      'I’ve seen a massive improvement in our lead generation since working with them. Highly recommend!',
  },
  {
    name: 'Rohan Gupta',
    title: 'Director, VisionWare',
    image: 'https://i.pravatar.cc/100?img=26',
    message:
      'The team’s dedication and innovative strategies gave us a competitive edge in a crowded market.',
  },
];

export default function SliderComponent() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Swiper
        grabCursor={true}
        effect="creative"
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay]} // 👈 Include Autoplay here
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="bg-white rounded-xl shadow-md shadow-gray-300 p-6 flex flex-col gap-4"
          >
            <div className="flex p-8 items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover border"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-gray-600 p-5 text-sm leading-relaxed px-1">
              “{testimonial.message}”
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
