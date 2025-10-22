import Head from 'next/head';
import AboutArea from '../../../components/Home/AboutArea';
import HomeBlog from '../../../components/Home/HomeBlog';
import Campus from '../../../components/Home/Campus';
import CounterArea from '../../../components/Home/CounterArea';
import Features from '../../../components/Home/Features';
import Header from '../../../components/Home/Header';
import HeroArea from '../../../components/Home/HeroArea';
// import HomeCourses from '../../../components/Home/HomeCourses';
import Cta from '../../../components/Home/Cta';
import Footer from '../../../components/common/Footer';
import SEO from '../../../components/seo';

export default function extraactivites() {
  return (
    <>
       <SEO 
        pageTitle="School Activities" 
        description="Discover extracurricular activities at VISTE SENIOR ACADEMY Norton under Principal Caxton Buffalo Nyathi. Sports, clubs, cultural events and academic competitions in Norton, Nharira, Zimbabwe."
        keywords="VISTE SENIOR ACADEMY activities Norton, extracurricular activities Norton Zimbabwe, school sports Nharira, school clubs Norton, Caxton Buffalo Nyathi principal"
        url="https://viste-online.co.zw/school-activities"
      />

      <Header/>
      <div>
        <h1>School Activities</h1>
        <p>Content for school activities will be added here.</p>
      </div>
      <Footer/>
    </>
  )
}
