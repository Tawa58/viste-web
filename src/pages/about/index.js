// pages/about-us/index.js
import React from "react";
import AboutUsArea from "../../../components/AboutUs/AboutUsArea";
import Header from '../../../components/Home/Header';
// import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import SEO from "../../../components/seo";

const AboutUs = () => {
  return (
    <>
      <SEO 
        pageTitle="About Us" 
        description="Learn about VISTE SENIOR ACADEMY - Norton's premier boarding school since 2020 in Nharira, Zimbabwe under Principal Caxton Buffalo Nyathi. Excellence in education with modern facilities, dedicated teachers and outstanding results."
        keywords="about VISTE SENIOR ACADEMY Norton, boarding school Norton Zimbabwe, educational excellence Nharira, school history Norton, modern facilities Nharira Zimbabwe, Caxton Buffalo Nyathi principal"
        url="https://viste-online.co.zw/about"
      />
      <Header />
      {/* <BreadCrumb title="About us" subtitle="About Us" /> */}
      <AboutUsArea />
      <Footer />
    </>
  );
};

export default AboutUs;
