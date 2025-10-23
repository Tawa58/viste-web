import Head from "next/head";
import AboutArea from "../../components/Home/AboutArea";
import CounterArea from "../../components/Home/CounterArea";
import Features from "../../components/Home/Features";
import Header from "../../components/Home/Header";
import HeroArea from "../../components/Home/HeroArea";
import LoadingScreen from '../../components/common/LoadingScreen';
import Footer from "../../components/common/Footer";
import SEO from "../../components/seo";
import SubjectOffers from "../../components/More/SubjectOffers";
import WhatsAppButton from "../../components/elements/WhatsAppButton";
import Achievements from "../../components/achievements/Achievements";

export default function Home() {
  return (
    <>
      <SEO 
        pageTitle="VISTE SENIOR ACADEMY - Best STEM School in Norton, Zimbabwe"
        description="VISTE SENIOR ACADEMY (Visionary Institute) - #1 STEM boarding school Norton, Zimbabwe. 76%+ ZIMSEC & Cambridge pass rates. Science, Technology, Engineering, Mathematics excellence. Principal Caxton Buffalo Nyathi. Enroll today!"
        keywords="VISTE SENIOR ACADEMY, best school Norton Zimbabwe, STEM education Zimbabwe, boarding school Norton, science technology mathematics Norton, ZIMSEC Cambridge Norton, top schools Zimbabwe, Nharira boarding school, Caxton Buffalo Nyathi, private school Zimbabwe, engineering education Norton"
        url="https://www.viste-online.co.zw"
      />
      <LoadingScreen />
      <Header />
      <HeroArea />
      <Features />
      <AboutArea 
        principalImage="/assets/img/about/22.png"
        principalName="Caxton (Buffalo) Nyathi"
        schoolName="VISTE SENIOR ACADEMY"
        about_pt=""
      />
      <CounterArea />
      <Achievements />
      <SubjectOffers />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
