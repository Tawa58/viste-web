import React from "react";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import School from "./school"
import SEO from "../../../components/seo";

const SchoolCurriculumPage = () => {
  return (
    <>
      <SEO pageTitle="School Curriculum" />
      <Header />
      <School />
      <Footer />
    </>
  );
};

export default SchoolCurriculumPage;