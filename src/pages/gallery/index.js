import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import Gallery from "./gallery";
import SEO from "../../../components/seo";

const SignIn = () => {
  return (
    <>
      <SEO 
        pageTitle="Gallery" 
        description="Photo gallery of VISTEM Academy Norton showcasing school facilities, student life and activities under Principal Caxton Buffalo Nyathi in Norton, Nharira, Zimbabwe."
        keywords="VISTEM Academy gallery Norton, school photos Norton Zimbabwe, campus facilities Nharira, student life Norton, Caxton Buffalo Nyathi principal"
        url="https://viste-online.co.zw/gallery"
      />
      <Header />
      {/* <BreadCrumb title="Principal Message" subtitle="Principal Message" /> */}
      <Gallery />
      <Footer />
    </>
  );
};

export default SignIn;
