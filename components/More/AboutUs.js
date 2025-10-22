import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="about-us-section bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-xl shadow-lg">
          <div className="md:w-1/3">
          </div>
          <div className="md:w-2/3 text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About Our School
            </h1>
            <p className="text-lg text-gray-600">
              Welcome to Visionary Institute of Science and Technology—where tradition meets innovation. We’re
              dedicated to creating a nurturing environment that empowers every
              student to excel.
            </p>
          </div>
        </div>

        {/* History, Mission, Vision */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Our Journey",
              text: "Founded in 2020, Visionary Institute of Science and Technology has continually evolved, setting new standards in educational excellence.",
            },
            {
              title: "Our Mission",
              text: "To provide affordable, high-quality education that empowers learners through Science, Technology, Engineering, and Mathematics, fostering creativity, critical thinking, moral integrity, and lifelong learning for the advancement of both individual and community well-being.",
            },
            {
              title: "Our Vision", 
              text: "To be a centre of excellence in Science, Technology, Engineering, and Mathematics (STEM) education, nurturing innovative, disciplined, and globally minded learners who lead with faith, integrity, and purpose.",
            },
            {
              title: "Our Core Values",
              text: "At VISTE SENIOR ACADEMY, our actions are guided by principles that define our identity and inspire excellence in all we do. We uphold integrity and honesty, showing respect for every individual and remaining committed and accountable to our mission. We value teamwork and empathy, embrace inclusivity, and pursue excellence through innovation and lifelong learning.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Leadership Team */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Principal", image: "/principal.jpg" },
              { name: "Headmaster", image: "/headmaster.jpg" },
              { name: "Trustee", image: "/trustee.jpg" },
            ].map((leader, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 flex flex-col items-center"
              >
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={150}
                  height={150}
                  className="rounded-full"
                />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  {leader.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Our Core Values
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Integrity",
              "Excellence",
              "Innovation",
              "Community",
              "Respect",
            ].map((value, index) => (
              <span
                key={index}
                className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
