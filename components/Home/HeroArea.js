"use client"; // Ensures Swiper only runs on the client side

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination, Autoplay, EffectCreative, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

const HeroArea = () => {
  const sliderData = [
    {
      id: 1,
      title: "Preserving the Salience of our Success",
      img: "/assets/img/slider/slider-1.jpg",
    },
    {
      id: 2,
      title: (
        <>
          Dedicated to <br /> Excellence in Education
        </>
      ),
      img: "/assets/img/slider/slider-2.jpg",
    },
    {
      id: 3,
      title: "Nurturing Minds, Shaping Characters",
      img: "/assets/img/slider/slider-5.jpg",
    },
    {
      id: 4,
      title: (
        <>
          Building a <br /> Community of Learners
        </>
      ),
      img: "/assets/img/slider/slider-4.jpg",
    },
  ];

  return (
    <>
      <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-[100vh] overflow-hidden lg:pt-16">
        <Swiper
          effect="creative"
          parallax={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          speed={900}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          creativeEffect={{
            prev: { shadow: false, translate: ["-20%", 0, -1], scale: 0.9, opacity: 0.6 },
            next: { shadow: false, translate: ["20%", 0, -1], scale: 0.9, opacity: 0.6 },
          }}
          modules={[Autoplay, Navigation, Pagination, EffectCreative, Parallax]}
          className="w-full h-full"
        >
          {sliderData.map((slider) => (
            <SwiperSlide key={slider.id} className="relative w-full h-full flex items-center justify-center">
              {/* Background Image with Ken Burns effect */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center lg:bg-top kenburns"
                style={{ backgroundImage: `url(${slider.img})` }}
                data-swiper-parallax="-20%"
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10" />

              {/* Content */}
              <div className="relative z-10 w-full flex items-center justify-center h-full">
                <div className="max-w-2xl mx-auto px-4 py-8 text-center">
                  <span
                    className="block text-xs md:text-sm font-semibold text-white mb-2 drop-shadow-lg"
                    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                    data-swiper-parallax="-40"
                  >
                    VISSIONARY INSTITUTE OF SCIENCE AND TECHNOLOGY
                  </span>
                  <h2
                    className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg"
                    style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)" }}
                    data-swiper-parallax="-80"
                  >
                    {slider.title}
                  </h2>
                  <p
                    className="text-white text-base md:text-lg drop-shadow-lg"
                    style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}
                    data-swiper-parallax="-120"
                  >
                    We believe everyone should have the opportunity to create progress through science and technology.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

    </>
  );
};

export default HeroArea;
