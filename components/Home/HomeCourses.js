import Link from "next/link";
import Image from "next/image";

const achievementsData = [
  {
    id: "1",
    title: "National Sports Championship",
    description:
      "Our school clinched the national championship in track and field, setting new records.",
    image: "/assets/img/blog/achievement.png",
    category: "Sports",
    year: "2025",
  },
  {
    id: "2",
    title: "Elite School for Kids",
    description:
      "Elite School for Kids is dedicated to nurturing young minds in a safe, creative, and inspiring environment. Our curriculum is designed to foster curiosity, confidence, and a lifelong love of learning. Join us to experience a world-class education tailored for every child.",
    image: "/assets/img/blog/elite.png",
    category: "About Our School",
    year: "2025",
  },
  {
    id: "4",
    title: "Cultural Fest Excellence",
    description:
      "Awarded for the best cultural program that celebrated diversity and talent.",
    image: "/assets/img/blog/achievement-3.jpg",
    category: "Cultural",
    year: "2025",
  },
  {
    id: "5",
    title: "Dedicated Staff",
    description:
      "At Viste , We have a dedicated team of passionate staff members and strong leadership, committed to supporting every student's success. ",
    image: "/assets/img/blog/a.jpg",
    category: "Leadership and Staff",
    year: "2025",
  },
  {
    id: "6",
    title: "Community Service Award",
    description:
      "Recognized for significant contributions to community welfare and service.",
    image: "/assets/img/blog/achievement-1.jpg",
    category: "Community",
    year: "2021",
  },
];

const AchievementCard = ({ achievement }) => {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
      <div className="achievement__item white-bg transition-3 mb-30" style={{ borderRadius: "18px", boxShadow: "0 4px 24px rgba(44,62,80,0.10)", minHeight: "420px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div
          className="achievement__thumb w-img fix course_thumb_height"
          style={{
            position: "relative",
            width: "100%",
            height: "240px",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "16px 16px 0 0",
            overflow: "hidden",
          }}
        >
          <Image
            src={achievement.image}
            alt={achievement.title}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            style={{ borderRadius: "16px 16px 0 0" }}
            priority={true}
          />
        </div>
        <div className="achievement__content p-relative pt-3 pb-3 px-3" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="achievement__tag mb-2">
            <span style={{ fontWeight: 600, color: "#1976d2" }}>{achievement.category}</span>
          </div>
          <h3 className="achievement__title mb-2" style={{ color: "#1a237e", fontWeight: 700, fontSize: "1.25rem" }}>{achievement.title}</h3>
          <p className="mb-2" style={{ fontSize: "1.05rem", color: "#333", minHeight: "60px" }}>{achievement.description}</p>
          <div className="achievement__bottom d-sm-flex align-items-center justify-content-between">
            <p className="achievement__year mb-0" style={{ color: "#1976d2", fontWeight: 600 }}>{achievement.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SchoolAchievements = () => {
  return (
    <section className="course__area grey-bg-3 pt-40">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="section__title-wrapper text-center mb-60">
              <span className="section__title-pre">Recognizing Excellence</span>
              <h2 className="section__title section__title-44">
                Awards & Achievements
              </h2>
              <p>
                Our prestigious national school has been honored with awards in
                sports, academic competitions, cultural fests, and more.
              </p>
            </div>
          </div>
        </div>
        <div className="row">{achievementsData.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}</div>
      </div>
    </section>
  );
};

export default SchoolAchievements;
