import Link from "next/link";
import Image from "next/image";

const AboutArea = ({
  about_pt = "",
  principalImage,
  principalName,
  schoolName,
}) => {
  return (
    <section
      className={`about__area pt-60 pb-100 p-relative ${about_pt}`}
    >
      <div className="container">
        <div className="section__title-wrapper text-center mb-15">
          <span className="section__title-pre">
            {schoolName || "Visionary Institute of Science &amp; Tech"}
          </span>
          <h2 className="section__title" style={{ color: '#1a237e' }}>Principal&apos;s Message</h2>
        </div>
        <div className="row align-items-center justify-content-center">
          {/* Left Column - Principal's Image */}
          <div className="col-xxl-5 col-xl-5 col-lg-5 order-lg-2 order-1 d-flex flex-column align-items-center">
            <div className="about__thumb-wrapper p-relative text-center" style={{ width: "100%", maxWidth: "350px" }}>
              <div className="about__thumb" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.10)", background: "#fff" }}>
                <Image
                  src={principalImage || "/assets/img/about/1.jpg"}
                  alt={principalName || "Principal"}
                  width={350}
                  height={350}
                  layout="responsive"
                  style={{ objectFit: "cover", borderRadius: "16px" }}
                  className="img-fluid"
                />
              </div>
            </div>
            <h4 style={{ 
              marginTop: "1.2rem", 
              fontWeight: 700, 
              color: "#1a237e", 
              fontSize: "1.4rem",
              textAlign: "center",
              marginBottom: "0.5rem"
            }}>
              {principalName || "Principal"}
            </h4>
            <p style={{ 
              fontSize: "1.1rem", 
              color: "#1a237e", 
              marginBottom: 0, 
              textAlign: "center",
              fontWeight: 500,
              fontStyle: "italic"
            }}>
              {schoolName || "Visionary Institute of Science & Tech"}
            </p>
          </div>

          {/* Right Column - Principal's Message */}
          <div className="col-xxl-7 col-xl-7 col-lg-7 order-lg-1 order-2">
            <div className="about__content pl-30 pr-25 text-lg-start text-center" style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", padding: "2rem" }}>
              <div className="section__title-wrapper mb-15">
                <span className="section__title-pre">
                  {schoolName || "Visionary Institute of Science & Tech"}
                </span>
                <h2 className="section__title" style={{ color: '#1a237e' }}>Principal&apos;s Message</h2>
              </div>
              <p style={{ fontSize: "1.1rem", color: "#333", marginBottom: "1.2rem" }}>
                Welcome to {schoolName || "Visionary Institute of Science and Technology"}, where excellence is not just our goal&mdash;it&apos;s our standard. Since our establishment in 2020, we have been on an extraordinary journey of academic achievement and holistic development that has positioned us as a leading educational institution.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#333", marginBottom: "1.2rem" }}>
                We are proud to have consistently achieved outstanding pass rates of more than 76% in both ZIMSEC and Cambridge examinations. As a full-time boarding school, we provide a nurturing and secure environment where students from diverse backgrounds come together to learn, grow, and form lifelong friendships.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#333", marginBottom: "1.2rem" }}>
                Our modern boarding facilities are designed to be a home away from home, with 24-hour supervision and a structured program that balances academic rigor with recreational activities. We are committed to producing well-rounded individuals who are not only academically competent but also morally upright and socially responsible citizens.
              </p>
              <div className="about__btn">
                <Link href="/principal-message">
                  <a className="tp-btn tp-btn-2">Read more</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
