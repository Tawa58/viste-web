import React from 'react';
import Image from 'next/image';

const subjects = {
  "Pure Sciences": [
    { name: "Physics", icon: "https://img.icons8.com/ios-filled/50/007bff/test-tube.png" },
    { name: "Chemistry", icon: "https://img.icons8.com/ios-filled/50/007bff/test-tube.png" },
    { name: "Biology", icon: "https://img.icons8.com/ios-filled/50/007bff/leaf.png" },
    { name: "Mathematics", icon: "https://img.icons8.com/ios-filled/50/007bff/calculator.png" },
  ],
  Commercials: [
    { name: "Accounting", icon: "https://img.icons8.com/ios-filled/50/007bff/calculator.png" },
    { name: "Business Studies", icon: "https://img.icons8.com/ios-filled/50/007bff/book.png" },
    { name: "Economics", icon: "https://img.icons8.com/ios-filled/50/007bff/book.png" },
  ],
  "Arts / Humanities": [
    { name: "History", icon: "https://img.icons8.com/ios-filled/50/007bff/book.png" },
    { name: "Geography", icon: "https://img.icons8.com/ios-filled/50/007bff/book.png" },
    { name: "English Literature", icon: "https://img.icons8.com/ios-filled/50/007bff/book.png" },
  ],
  Practicals: [
    { name: "Computer Science", icon: "https://img.icons8.com/ios-filled/50/007bff/laptop-coding.png" },
    { name: "Technical Graphics", icon: "https://img.icons8.com/ios-filled/50/007bff/compass.png" },
    { name: "Agriculture", icon: "https://img.icons8.com/ios-filled/50/007bff/leaf.png" },
    { name: "Metal Work", icon: "https://img.icons8.com/ios-filled/50/007bff/hammer.png" },
    { name: "Woodwork", icon: "https://img.icons8.com/ios-filled/50/007bff/hammer.png" },
    { name: "Food Science", icon: "https://img.icons8.com/ios-filled/50/007bff/cutlery.png" },
    { name: "Textile Tech & Design", icon: "https://img.icons8.com/ios-filled/50/007bff/t-shirt.png" },
  ],
};

const SubjectOffers = () => {
  return (
    <section className="subjects-section">
      <h2 className="section__title subjects-title subjects-title-icon">
        <i className="fas fa-book"></i> Our Subject Offers for Zimsec, Cambridge and Hexco
      </h2>
      <p className="subjects-description">
        We proudly offer a diverse range of subjects designed to equip our students with the knowledge and skills needed for success. Our students consistently achieve excellent pass rates, reflecting our commitment to providing quality education and fostering academic excellence.
      </p>
      <div className="subjects-groups-container">
        {Object.entries(subjects).map(([group, items]) => (
          <div key={group} className="subjects-group">
            <h3 className="subjects-group-title">{group}</h3>
            <div className="subjects-grid">
              {items.map((subject) => (
                <div
                  key={subject.name}
                  className="subject-card"
                  title={subject.name}
                >
                  <div className="icon-wrapper">
                    <Image src={subject.icon} alt={subject.name} width={32} height={32} />
                  </div>
                  <div className="subject-name">
                    {subject.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubjectOffers;
