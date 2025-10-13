import React from "react";
import Image from "next/image";
import achievementsData from "../../data/achievements.json";

const AchievementsArea = () => {
  return (
    <section className="achievement__area pt-60 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="section__title-wrapper text-center mb-60">
              <h2 className="section__title achievements-title"><i className="fas fa-trophy"></i> Our Achievements</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* First tile - completely separate and independent */}
          {achievementsData.length > 0 && (
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
              <div
                className="achievement__item white-bg transition-3 mb-30"
                style={{
                  borderRadius: "18px",
                  boxShadow: "0 4px 24px rgba(44,62,80,0.10)",
                  minHeight: "420px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="achievement__thumb w-img fix course_thumb_height"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "240px", // First tile container height - EDIT HERE
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "16px 16px 0 0",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={achievementsData[0].img_bg}
                    alt={achievementsData[0].title}
                    width={110} // First tile image width - EDIT HERE
                    height={170} // First tile image height - EDIT HERE
                    className="achievements-image"
                  />
                </div>
                <div
                  className="achievement__content p-relative pt-3 pb-3 px-3"
                  style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}
                >
                  <div className="achievement__tag mb-2">
                    <span style={{ fontWeight: 600, color: "#1976d2" }}>{achievementsData[0].tutor_name}</span>
                  </div>
                  <h3 className="achievement__title mb-2" style={{ color: "#1a237e", fontWeight: 700, fontSize: "1.25rem" }}>
                    {achievementsData[0].title}
                  </h3>
                  <p className="mb-2" style={{ fontSize: "1.05rem", color: "#333", minHeight: "60px" }}>
                    {achievementsData[0].description}
                  </p>
                  <div className="achievement__bottom d-sm-flex align-items-center justify-content-between">
                    <p className="achievement__year mb-0" style={{ color: "#1976d2", fontWeight: 600 }}>
                      {achievementsData[0].date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Remaining tiles (2-6) - completely separate and independent */}
          {achievementsData.slice(1).map((achievement) => (
            <div key={achievement._id} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
              <div
                className="achievement__item white-bg transition-3 mb-30"
                style={{
                  borderRadius: "18px",
                  boxShadow: "0 4px 24px rgba(44,62,80,0.10)",
                  minHeight: "420px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="achievement__thumb w-img fix course_thumb_height"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "240px", // Other tiles container height
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "16px 16px 0 0",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={achievement.img_bg}
                    alt={achievement.title}
                    width={400} // Other tiles image width
                    height={240} // Other tiles image height
                    className="achievements-image"
                  />
                </div>
                <div
                  className="achievement__content p-relative pt-3 pb-3 px-3"
                  style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}
                >
                  <div className="achievement__tag mb-2">
                    <span style={{ fontWeight: 600, color: "#1976d2" }}>{achievement.tutor_name}</span>
                  </div>
                  <h3 className="achievement__title mb-2" style={{ color: "#1a237e", fontWeight: 700, fontSize: "1.25rem" }}>
                    {achievement.title}
                  </h3>
                  <p className="mb-2" style={{ fontSize: "1.05rem", color: "#333", minHeight: "60px" }}>
                    {achievement.description}
                  </p>
                  <div className="achievement__bottom d-sm-flex align-items-center justify-content-between">
                    <p className="achievement__year mb-0" style={{ color: "#1976d2", fontWeight: 600 }}>
                      {achievement.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsArea;
