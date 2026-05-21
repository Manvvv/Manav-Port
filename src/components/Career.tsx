import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Secondary Education (PCM)</h4>
                <h5>Green Field Public School (CBSE)</h5>
              </div>
              <h3>2022 – 2024</h3>
            </div>
            <p>
              Completed Class XI–XII with Physics, Chemistry, and Mathematics (PCM), building a strong analytical and problem-solving foundation for engineering and technology.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Multiple Platforms</h5>
              </div>
              <h3>2024 – 2026</h3>
            </div>
            <p>
              Workflow Specialist – Asana (2026) · Gemini Certified Student –
              Google for Education (2026) · Programming Fundamentals using
              Python – Infosys Springboard (2025) · Data Structures Course –
              CodeChef (2025) · Design Thinking & Entrepreneurship – Udemy (2026)
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science (AI)</h4>
                <h5>ABES Institute of Technology</h5>
              </div>
              <h3>2024 – 2028</h3>
            </div>
            <p>
              Pursuing B.Tech in Computer Science with specialization in
              Artificial Intelligence. Active member of the Coding Club,
              participating in coding contests and technical events.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Member, Coding Club</h4>
                <h5>ABES Institute of Technology</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Solved 100+ problems on LeetCode. Participated in 6+ hackathons.
              Built real-world AI-based applications. Collaborated with peers
              to improve problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
