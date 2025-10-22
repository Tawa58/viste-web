import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import ContactArea from "../../../components/Contact/ContactArea";
// import ContactFooter from "../../../components/Contact/ContactFooter";
// import ContactInfoArea from "../../../components/Contact/ContactInfoArea";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";

const Contact = () => {
  return (
    <>
      <SEO 
        pageTitle="Contact Us" 
        description="Get in touch with VISTE SENIOR ACADEMY Norton under Principal Caxton Buffalo Nyathi. Contact our admissions team for enrollment, school information and general inquiries. Located in Norton, Nharira, Zimbabwe. WhatsApp: +263789984774"
        keywords="contact VISTE SENIOR ACADEMY Norton, school admissions Norton Zimbabwe, enrollment inquiries Nharira, school contact information Norton, Caxton Buffalo Nyathi principal"
        url="https://viste-online.co.zw/contact"
      />
      <Header />
      <BreadCrumb title="Contact" subtitle="Contact" />
      <ContactArea />
    </>
  );
};

export default Contact;
