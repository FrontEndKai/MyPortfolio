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
        <span className="section-label">Get To Know More</span>
        <h1 className="section-title">About Me</h1>
        <div className="about-content-wrapper">
          <div className="about-image-section">
            <div className="about-image-placeholder">
              <span className="image-text">Your Photo</span>
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
              <span className="timeline-date">2024 - Present</span>
              <h3 className="timeline-title">Senior Developer</h3>
              <p className="timeline-company">Your Company Name</p>
              <p className="timeline-description">
                Leading development of web applications and mentoring junior developers.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-date">2022 - 2024</span>
              <h3 className="timeline-title">Full Stack Developer</h3>
              <p className="timeline-company">Previous Company</p>
              <p className="timeline-description">
                Developed and maintained multiple client projects using React and Node.js.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-date">2018 - 2022</span>
              <h3 className="timeline-title">Computer Science Degree</h3>
              <p className="timeline-company">Your University</p>
              <p className="timeline-description">
                Graduated with honors, specialized in web development and software engineering.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
