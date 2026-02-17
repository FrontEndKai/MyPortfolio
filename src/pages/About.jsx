import "../styles/about.css";

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'CSS/Sass', level: 88 },
    { name: 'MySQL', level: 70 },
  ];

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern frameworks.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with attention to detail.'
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed and efficiency.'
    }
  ];

  return (
    <div className="page-shell about-page">
      <section className="about-header">
        <h1 className="section-title">About Me</h1>
        <div className="about-content-wrapper">
          <div className="about-image-section">
            <div className="about-image-placeholder">
              <img
                src="/me.jpg"
                alt="Alde Stephen D. Seares portrait"
                className="about-photo"
              />
            </div>
          </div>
          <div className="about-text-section">
            <p className="about-description">
              I'm a passionate developer with experience in building modern web applications. 
              I love creating user-friendly interfaces and solving complex problems with clean, 
              efficient code.
            </p>
            <p className="about-description">
              With a strong foundation in both frontend and backend technologies, I bring ideas to life 
              through elegant code and thoughtful design. I'm always learning and staying up-to-date 
              with the latest web technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-subtitle">What I Do</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2 className="section-subtitle">Technical Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2 className="section-subtitle">Experience & Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-date">2022</span>
              <h3 className="timeline-title">Information System (Carolinian UI/UX Designer)</h3>
              <p className="timeline-company">University of San Carlos</p>
              <p className="timeline-description">
                Making clean web designs from my own ideas and from the ideas of the client, making sure the design is responsive and user-friendly.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-date">2023-204</span>
              <h3 className="timeline-title">Information System (Carolinian Frontend Developer)</h3>
              <p className="timeline-company">University of San Carlos</p>
              <p className="timeline-description">
                Developed and maintained websites from design to implementation, ensuring responsive and user-friendly interfaces.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-date">2024-2025</span>
              <h3 className="timeline-title">Information System (Carolinian Backend Developer)</h3>
              <p className="timeline-company">University of San Carlos</p>
              <p className="timeline-description">
                Working the website from frontend to backend, making sure the website is responsive and user-friendly.
              </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-date">2025-2026</span>
              <h3 className="timeline-title">Information System (Carolinian Full Stack Developer)</h3>
              <p className="timeline-company">University of San Carlos</p>
              <p className="timeline-description">
                Making a project from design to implementation by working on frontend and backend, making sure the website is responsive and user-friendly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
