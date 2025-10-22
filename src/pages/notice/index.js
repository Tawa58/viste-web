import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import Notice from "../../../components/More/Notice";
import SEO from "../../../components/seo";

const SignIn = () => {
  return (
    <>
      <SEO 
        pageTitle="Notices" 
        description="Important notices and announcements from VISTE SENIOR ACADEMY Norton under Principal Caxton Buffalo Nyathi. Stay updated with school news, events and announcements in Norton, Nharira, Zimbabwe."
        keywords="VISTE SENIOR ACADEMY notices Norton, school announcements Norton Zimbabwe, school news Nharira, important notices Norton, Caxton Buffalo Nyathi principal"
        url="https://viste-online.co.zw/notice"
      />
      <Header />
      {/* <BreadCrumb title="Principal Message" subtitle="Principal Message" /> */}
      
      <Notice />
      <Footer />
    </>
  );
};

export default SignIn;
