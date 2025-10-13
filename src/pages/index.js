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
      <SEO pageTitle="Home Default" />
      <LoadingScreen />
      <Header />
      <HeroArea />
      <Features />
      <AboutArea 
        principalImage="/assets/img/about/22.png"
        principalName="Caxton (Buffalo) Nyathi"
        schoolName="Principal at VISTEM"
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
