import React from 'react';
import Image from 'next/image';

const subjects = {
  "Pure Sciences": [
    { name: "Physics", icon: "https://img.icons8.com/ios-filled/50/007bff/test-tube.png" },
    { name: "Chemistry", icon: "https://img.icons8.com/ios-filled/50/007bff/test-tube.png" },
    { name: "Biology", icon: "https://img.icons8.com/ios-filled/50/007bff/leaf.png" },
    { name: "Mathematics", icon: "https://img.icons8.com/ios-filled/50/007bff/calculator.png" },
    { name: "Additional Mathematics", icon: "https://img.icons8.com/ios-filled/50/007bff/calculator.png" },
  ],
  Commercials: [
    { name: "Accounting", icon: "https://img.icons8.com/ios-filled/50/007bff/calculator.png" },
    { name: "Business Studies", icon: "https://img.icons8.com/ios-filled/50/007bff/business.png" },
    { name: "Economics", icon: "https://img.icons8.com/ios-filled/50/007bff/graph.png" },
    { name: "Commerce", icon: "https://img.icons8.com/ios-filled/50/007bff/handshake.png" },
    { name: "Office Practice", icon: "https://img.icons8.com/ios-filled/50/007bff/office.png" },
    { name: "Principles of Accounts", icon: "https://img.icons8.com/ios-filled/50/007bff/ledger.png" },
    { name: "Entrepreneurship", icon: "https://img.icons8.com/ios-filled/50/007bff/rocket.png" },
  ],
  "Arts / Humanities": [
    { name: "History", icon: "https://img.icons8.com/ios-filled/50/007bff/book.png" },
    { name: "Geography", icon: "https://img.icons8.com/ios-filled/50/007bff/geography.png" },
    { name: "English Literature", icon: "https://img.icons8.com/ios-filled/50/007bff/book.png" },
    { name: "English Language", icon: "https://img.icons8.com/ios-filled/50/007bff/book.png" },
    { name: "Shona", icon: "https://img.icons8.com/ios-filled/50/007bff/language.png" },
    { name: "Ndebele", icon: "https://img.icons8.com/ios-filled/50/007bff/language.png" },
    { name: "Religious Studies", icon: "https://img.icons8.com/ios-filled/50/007bff/prayer.png" },
    { name: "Philosophy", icon: "https://img.icons8.com/ios-filled/50/007bff/idea.png" },
    { name: "Sociology", icon: "https://img.icons8.com/ios-filled/50/007bff/book.png" },
  ],
  Practicals: [
    { name: "Computer Science", icon: "https://img.icons8.com/ios-filled/50/007bff/laptop-coding.png" },
    { name: "Technical Graphics", icon: "https://img.icons8.com/ios-filled/50/007bff/compass.png" },
    { name: "Agriculture", icon: "https://img.icons8.com/ios-filled/50/007bff/leaf.png" },
    { name: "Metal Work", icon: "https://img.icons8.com/ios-filled/50/007bff/hammer.png" },
    { name: "Woodwork", icon: "https://img.icons8.com/ios-filled/50/007bff/hammer.png" },
    { name: "Food Science", icon: "https://img.icons8.com/ios-filled/50/007bff/cutlery.png" },
    { name: "Textile Tech & Design", icon: "https://img.icons8.com/ios-filled/50/007bff/t-shirt.png" },
    { name: "Fashion & Fabrics", icon: "https://img.icons8.com/ios-filled/50/007bff/t-shirt.png" },
    { name: "Building Technology", icon: "https://img.icons8.com/ios-filled/50/007bff/building.png" },
    { name: "Information Technology", icon: "https://img.icons8.com/ios-filled/50/007bff/computer.png" },
  ],
};

const SubjectOffers = () => {
  return (
    <section className="subjects-section">
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 
          style={{ 
            color: '#1a237e',
            fontWeight: '700',
            fontSize: '2rem',
            margin: '0',
            display: 'inline-block'
          }}
        >
          <i className="fas fa-book" style={{ color: '#1a237e', marginRight: '10px' }}></i> 
          Our Subject Offers for Zimsec, Cambridge and Hexco
        </h2>
      </div>
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
