import React from "react";
import Image from "next/image";
import SEO from "../../../components/seo";
import Header from "../../../components/Home/Header";
import Footer from "../../../components/common/Footer";

const PrincipalMessage = () => {
  return (
    <>
      <SEO pageTitle="Principal Message" />
      <Header />
      <section style={{ background: "#fff", minHeight: "100vh", padding: "60px 0" }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 text-center mb-4 mb-lg-0">
              <Image
                src="/assets/img/about/1.png"
                alt="Principal Mr Caxton (Buffalo) Nyathi"
                width={360}
                height={300}
                style={{ objectFit: "cover", borderRadius: "8px", boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
              />
              <h4 style={{ marginTop: "1.5rem", marginBottom: "0.5rem", fontWeight: 600 }}>Principal</h4>
              <p style={{ fontSize: "1.1rem", color: "#333", marginBottom: 0 }}>Mr Caxton (Buffalo) Nyathi</p>
            </div>
            <div className="col-lg-7">
              <div style={{ background: "#fff", borderRadius: "12px", padding: "2.5rem 2rem", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
                <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Visionary Institute Of Science & Tech</h3>
                <h4 style={{ fontWeight: 600, marginBottom: "1.5rem" }}>Principal's Message</h4>
                <h5 style={{ fontWeight: 500, marginBottom: "1.5rem" }}>Mr Caxton (Buffalo) Nyathi</h5>
                <p style={{ fontSize: "1.1rem", color: "#333", marginBottom: "1.5rem" }}>
                  Welcome to Visionary Institute of Science and Technology, where we foster academic excellence and personal growth. Our mission is to empower every student to reach their full potential through a comprehensive curriculum, dedicated teachers, and modern facilities.
                </p>
                <p style={{ fontSize: "1.1rem", color: "#333", marginBottom: "1.5rem" }}>
                  We are proud of our success in producing outstanding O and A Level results in ZIMSEC and Cambridge exams, nurturing sporting talent, and building a strong community. Our journey began in 2020, and we continue to innovate, transform, and expand to offer hands-on tertiary skills for the future workforce.
                </p>
                <ul style={{ fontSize: "1.05rem", color: "#333", marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
                  <li>Empower students with critical thinking and lifelong learning.</li>
                  <li>Foster a nurturing, inclusive environment for all.</li>
                  <li>Promote innovation, leadership, and global citizenship.</li>
                  <li>Transform education to offer hands-on tertiary skills for the future.</li>
                </ul>
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
