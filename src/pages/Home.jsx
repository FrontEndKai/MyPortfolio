import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Download, Code, Palette, Zap, Terminal, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Code Enthusiast', 'Project Manager', 'Business Analyst'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setTypedText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setTypedText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="page-shell home">
      {/* Animated Background */}
      <div className="bg-grid"></div>
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text">
            <div className="terminal-header">
              <Terminal size={20} />
              <span>~/developer/portfolio</span>
            </div>
            <p className="hero-greeting">
              <span className="code-bracket">&lt;</span>
              <Sparkles size={18} className="sparkle-icon" />
              Hello, I'm
              <span className="code-bracket">/&gt;</span>
            </p>
            <h1 className="hero-name">
              <span className="gradient-text">Alde Stephen D. Seares</span>
            </h1>
            <h2 className="hero-role">
              <span className="role-prefix"></span>
              <span className="role-text">{typedText}</span>
              <span className="role-cursor">|</span>
            </h2>
            <p className="hero-bio">
              <span className="code-comment">/* </span>
              Crafting pixel-perfect, high-performance web experiences.
              Transforming complex problems into elegant solutions.
              <span className="code-comment"> */</span>
            </p>
            
            <div className="code-snippet">
              <span className="code-keyword">const</span> <span className="code-variable">skills</span> = [
              <span className="code-string">'React'</span>, 
              <span className="code-string">'Node.js'</span>, 
              <span className="code-string">'TypeScript'</span>
              ];
            </div>
            
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">
                <Mail size={20} />
                <span>Let's Collaborate</span>
                <span className="btn-arrow">→</span>
              </Link>
              <a href="#" className="btn btn-secondary">
                <Download size={20} />
                <span>Download CV</span>
              </a>
            </div>

            <div className="hero-social">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={22} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={22} />
              </a>
              <a href="mailto:your.email@example.com" className="social-icon">
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image">
              <div className="image-wrapper">
                <div className="image-placeholder">
                  <div className="code-animation">
                    <div className="code-line"></div>
                    <div className="code-line"></div>
                    <div className="code-line"></div>
                    <div className="code-line"></div>
                  </div>
                  <Code size={80} className="placeholder-icon" />
                </div>
                
                {/* Tech Stack Badges */}
                <div className="tech-badge badge-1">
                  <div className="badge-icon">⚛️</div>
                  <div className="badge-text">
                    <strong>React</strong>
                    <span>Expert</span>
                  </div>
                </div>
                <div className="tech-badge badge-2">
                  <div className="badge-icon">📦</div>
                  <div className="badge-text">
                    <strong>Node.js</strong>
                    <span>Advanced</span>
                  </div>
                </div>
                <div className="tech-badge badge-3">
                  <div className="badge-icon">🎨</div>
                  <div className="badge-text">
                    <strong>Design</strong>
                    <span>Creative</span>
                  </div>
                </div>
                <div className="tech-badge badge-4">
                  <div className="badge-icon">⚡</div>
                  <div className="badge-text">
                    <strong>Performance</strong>
                    <span>Optimized</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats, integrated on the right column */}
            <section className="stats-section hero-stats">
              <div className="stats-grid">
                <div className="stat-card" data-aos="fade-up" data-aos-delay="100">
                  <div className="stat-icon">💼</div>
                  <div className="stat-content">
                    <h3 className="stat-number" data-count="1">1+</h3>
                    <p className="stat-label">Years Experience</p>
                  </div>
                  <div className="stat-progress"></div>
                </div>
                <div className="stat-card" data-aos="fade-up" data-aos-delay="200">
                  <div className="stat-icon">🚀</div>
                  <div className="stat-content">
                    <h3 className="stat-number" data-count="5">5+</h3>
                    <p className="stat-label">Projects Completed</p>
                  </div>
                  <div className="stat-progress"></div>
                </div>
                <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
                  <div className="stat-icon">⭐</div>
                  <div className="stat-content">
                    <h3 className="stat-number" data-count="3">3+</h3>
                    <p className="stat-label">Happy Clients</p>
                  </div>
                  <div className="stat-progress"></div>
                </div>
                <div className="stat-card stat-available" data-aos="fade-up" data-aos-delay="400">
                  <div className="stat-icon">✨</div>
                  <div className="stat-content">
                    <h3 className="stat-status">
                      <span className="status-dot"></span>
                      Available
                    </h3>
                    <p className="stat-label">For New Projects</p>
                  </div>
                  <div className="stat-progress"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
