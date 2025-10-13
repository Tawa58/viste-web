/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import Link from "next/link";

function SchoolCurriculum() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const curriculumData = [
    {
      id: 1,
      name: "Mathematics",
      courses: "Algebra, Geometry, Calculus",
      icon: "fa-solid fa-signal",
      link: "/files/math",
    },
    {
      id: 2,
      name: "Science",
      courses: "Physics, Chemistry, Biology",
      icon: "fa-solid fa-flask",
      link: "/files/science",
    },
    {
      id: 3,
      name: "Literature",
      courses: "Novels, Poetry, Drama",
      icon: "fa-solid fa-book",
      link: "/files/literature",
    },
    {
      id: 4,
      name: "History",
      courses: "Ancient, Medieval, Modern",
      icon: "fa-solid fa-landmark",
      link: "/files/history",
    },
    {
      id: 5,
      name: "Geography",
      courses: "Physical, Human, Economic",
      icon: "fa-solid fa-globe",
      link: "/files/geography",
    },
  ];

  return (
    <div className="container">
      <h1 className="page-title pb-10">School Curriculum</h1>
      <p className="page-subtitle">
        Explore our structured learning pathways. Select a subject below to
        view common guidelines and download course resources.
      </p>
      <ul className="page-highlights">
        <li>Aligned with national standards and age-appropriate milestones</li>
        <li>Balanced focus on knowledge, skills, and values</li>
        <li>Continuous assessment with transparent evaluation criteria</li>
      </ul>
      <div className="accordion">
        {curriculumData.map((item) => {
          // For categories with id 1 to 5: 6 options (1 common + 5 files)
          // For categories with id 6 to 8: 4 options (1 common + 3 files)
          const totalOptions = item.id <= 5 ? 6 : 4;
          return (
            <div key={item.id} className="accordion-item">
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(item.id)}
              >
                <div className="header-left">
                  <i className={item.icon} />
                  <span className="name">{item.name}</span>
                  <span className="courses">{item.courses}</span>
                </div>
                <div className="header-right">
                  <i
                    className={`fa-solid fa-chevron-down chevron ${
                      openAccordion === item.id ? "rotate" : ""
                    }`}
                  ></i>
                </div>
              </div>
              <div
                className="accordion-body"
                style={{ display: openAccordion === item.id ? "block" : "none" }}
              >
                <table className="download-table">
                  <tbody>
                    {Array.from({ length: totalOptions }, (_, i) => {
                      const optionIndex = i + 1;
                      let description = "";
                      if (optionIndex === 1) {
                        description = `Common Guidelines for ${item.name}`;
                      } else {
                        description = `Download File ${optionIndex - 1} for ${item.name}`;
                      }
                      return (
                        <tr key={optionIndex}>
                          <td className="option-text">{description}</td>
                          <td className="option-action">
                            <Link
                              href={`${item.link}?option=${optionIndex}`}
                              passHref
                            >
                              <a>View</a>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 50px;
          font-family: Arial, sans-serif;
        }
        .page-title {
          text-align: center;
          margin-bottom: 20px;
          font-size: 2rem;
          color: #333;
        }
        .page-subtitle {
          text-align: center;
          margin: 0 auto 25px auto;
          max-width: 820px;
          font-size: 1rem;
          line-height: 1.6;
          color: #555;
        }
        .accordion {
          border: 1px solid #ddd;
          border-radius: 5px;
          overflow: hidden;
        }
        .page-highlights {
          max-width: 820px;
          margin: 0 auto 30px auto;
          padding-left: 20px;
          color: #444;
        }
        .page-highlights li {
          margin: 6px 0;
          line-height: 1.6;
        }
        .accordion-item {
          border-bottom: 1px solid #ddd;
        }
        .accordion-item:last-child {
          border-bottom: none;
        }
        .accordion-header {
          background-color: #f8f9fa;
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }
        .header-left {
          display: flex;
          align-items: center;
        }
        .header-left i {
          font-size: 1.5rem;
          margin-right: 10px;
          color: #1363df;
        }
        .name {
          font-size: 18px;
          font-weight: bold;
          margin-right: 10px;
          color: #333;
        }
        .courses {
          font-size: 16px;
          color: #555;
        }
        .header-right {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }
        .chevron.rotate {
          transform: rotate(180deg);
        }
        .accordion-body {
          padding: 15px;
          background-color: #fff;
        }
        .download-table {
          width: 100%;
          border-collapse: collapse;
        }
        .download-table td {
          border: 1px solid #ddd;
          padding: 8px;
        }
        .option-text {
          text-align: left;
          font-size: 1rem;
          color: #333;
        }
        .option-action {
          text-align: right;
          font-size: 1rem;
        }
        .option-action a {
          text-decoration: none;
          color: #3d6ce7;
        }
        @media (max-width: 768px) {
          .accordion-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .header-right {
            align-self: flex-end;
            margin-top: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default SchoolCurriculum;
