import React from "react";
import Image from "next/image";
import SEO from "../../../components/seo";
import Header from "../../../components/Home/Header";
import Footer from "../../../components/common/Footer";

const PrincipalMessage = () => {
  return (
    <>
      <SEO 
        pageTitle="Principal's Message" 
        description="Message from Principal Caxton Nyathi - VISTE SENIOR ACADEMY Norton's commitment to academic excellence, character development and holistic education in Norton, Nharira, Zimbabwe."
        keywords="Principal message Caxton Nyathi, VISTE SENIOR ACADEMY Norton leadership, educational excellence Norton Zimbabwe, boarding school principal Nharira"
        url="https://viste-online.co.zw/principal-message"
      />
      <Header />
      <section style={{ background: "#fff", minHeight: "100vh", padding: "60px 0" }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 text-center mb-4 mb-lg-0">
              <Image
                src="/assets/img/about/1.png"
                alt="Principal Mr Caxton (Buffalo) Nyathi"
                width={380}
                height={280}
                style={{ objectFit: "cover", borderRadius: "8px", boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
              />
              <h4 style={{ marginTop: "1.5rem", marginBottom: "0.5rem", fontWeight: 600, color: '#1a237e' }}>Principal</h4>
              <p style={{ fontSize: "1.1rem", color: "#1a237e", marginBottom: 0, fontWeight: 500 }}>Mr Caxton (Buffalo) Nyathi</p>
            </div>
            <div className="col-lg-7">
              <div style={{ background: "#fff", borderRadius: "12px", padding: "2.5rem 2rem", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
                <h3 style={{ fontWeight: 700, marginBottom: "1rem", color: '#1a237e' }}>Visionary Institute Of Science & Technology</h3>
                <h4 style={{ fontWeight: 600, marginBottom: "1.5rem", color: '#1a237e' }}>Principal&apos;s Message</h4>
                <h5 style={{ fontWeight: 500, marginBottom: "1.5rem", color: '#1a237e' }}>Mr Caxton (Buffalo) Nyathi</h5>
                
                <p style={{ fontSize: "1.15rem", color: "#333", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                  <strong>Dear Students, Parents, and School Community,</strong>
                </p>
                
                <p style={{ fontSize: "1.1rem", color: "#333", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                  Welcome to Visionary Institute of Science and Technology (VISTE), where educational excellence meets holistic development. Since 2020, we have established ourselves as a leading institution, consistently achieving over 76% pass rates in ZIMSEC and Cambridge examinations.
                </p>

                <h4 style={{ fontWeight: 600, marginBottom: "1rem", color: '#1a237e', fontSize: '1.2rem' }}>Our Mission</h4>
                <p style={{ fontSize: "1.1rem", color: "#333", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                  As a full-time boarding school, we provide a nurturing environment where academic excellence, character development, and innovation converge. Our modern facilities and dedicated faculty ensure every student reaches their full potential through comprehensive education and practical skills training.
                </p>

                <h4 style={{ fontWeight: 600, marginBottom: "1rem", color: '#1a237e', fontSize: '1.2rem' }}>Academic Excellence</h4>
                <p style={{ fontSize: "1.1rem", color: "#333", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                  We offer a diverse curriculum spanning Pure Sciences, Commerce, Arts, and practical subjects for ZIMSEC, Cambridge, and HEXCO qualifications. Our state-of-the-art laboratories and technology-enhanced classrooms provide hands-on learning experiences that prepare students for future careers.
                </p>

                <h4 style={{ fontWeight: 600, marginBottom: "1rem", color: '#1a237e', fontSize: '1.2rem' }}>Holistic Development</h4>
                <p style={{ fontSize: "1.1rem", color: "#333", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                  Beyond academics, we emphasize character building through sports, cultural activities, leadership programs, and community service. Our 24-hour supervised boarding environment fosters lifelong friendships and develops responsible, globally-minded citizens.
                </p>

                <p style={{ fontSize: "1.1rem", color: "#333", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                  At VISTE SENIOR ACADEMY, we don&apos;t just educate—we inspire, challenge, and empower. Every student matters, every dream is nurtured, and every achievement is celebrated as we build the leaders of tomorrow.
                </p>

                <p style={{ fontSize: "1.1rem", color: "#1a237e", marginBottom: "0.5rem", fontWeight: 600 }}>
                  Warm regards,
                </p>
                <p style={{ fontSize: "1.2rem", color: "#1a237e", fontWeight: 700, marginBottom: "0.3rem" }}>
                  Mr. Caxton (Buffalo) Nyathi
                </p>
                <p style={{ fontSize: "1.05rem", color: "#1a237e", fontWeight: 500, fontStyle: "italic" }}>
                  Principal, Visionary Institute of Science & Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrincipalMessage;
