import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'CAMPERS: CLG/CES Accessible Management Portal and Event Reporting System',
      category: 'Full Stack',
      description: 'A complete system for tracking students points.',
      technologies: ['React', 'Node.js', 'Vercel', 'Tailwind CSS', 'Firebase'],
      image: '🛒',
      liveLink: 'https://project1.com',
      githubLink: 'https://github.com/yourusername/project1'
    },
    {
      id: 2,
      title: 'Shuttlemate',
      category: 'Frontend',
      description: 'A system that can book shuttle in the campus',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      image: '📋',
      liveLink: 'https://project2.com',
      githubLink: 'https://github.com/yourusername/project2'
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      category: 'Full Stack',
      description: 'Analytics dashboard for social media management with real-time data visualization.',
      technologies: ['React', 'Express', 'PostgreSQL', 'Chart.js'],
      image: '📊',
      liveLink: 'https://project3.com',
      githubLink: 'https://github.com/yourusername/project3'
    },
    {
      id: 4,
      title: 'Portfolio Builder',
      category: 'Frontend',
      description: 'A drag-and-drop portfolio builder for developers and designers.',
      technologies: ['React', 'Vite', 'CSS Grid'],
      image: '🎨',
      liveLink: 'https://project4.com',
      githubLink: 'https://github.com/yourusername/project4'
    },
    {
      id: 5,
      title: 'Weather App',
      category: 'Frontend',
      description: 'Real-time weather application with beautiful UI and location-based forecasts.',
      technologies: ['React', 'Weather API', 'CSS'],
      image: '🌤️',
      liveLink: 'https://project5.com',
      githubLink: 'https://github.com/yourusername/project5'
    },
    {
      id: 6,
      title: 'Chat Application',
      category: 'Full Stack',
      description: 'Real-time chat app with group conversations, file sharing, and notifications.',
      technologies: ['React', 'Socket.io', 'Node.js', 'MySQL'],
      image: '💬',
      liveLink: 'https://project6.com',
      githubLink: 'https://github.com/yourusername/project6'
    }
  ];

  return (
    <div className="page-shell projects-page">
      <div className="projects-header">
        <span className="section-label">Browse My Recent</span>
        <h1 className="section-title">Projects</h1>
        <p className="projects-intro">
          Here are some of my recent projects. Each one represents a unique challenge 
          and learning experience in my development journey.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card-header">
              <span className="project-category">{project.category}</span>
            </div>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-footer">
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <ExternalLink size={18} /> Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <Github size={18} /> Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
