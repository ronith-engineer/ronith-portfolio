import React, { useState } from 'react';
import { Film, Trophy, GraduationCap, Video, X, Globe, Code, Github,Download } from 'lucide-react';
import './styles/Portfolio.css';

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const personalInfo = {
    name: "Ronith Kartikeyan",
    school: "Springdales School, Pusa Road",
    grade: "12th Grade",
    bio: [
      "🎓 Aspiring Electrical Engineer with deep passion for Physics and Mathematics",
      "🎥 National award-winning filmmaker",
      "🔬 Active participant in STEM competitions and leadership roles",
      "🌟 Balancing academics, creativity, and innovation"
    ]
  };

  const filmProjects = [
    {
      title: "Inclusive Learning",
      award: "All India Second Position - TGELF 2022",
      keyPoints: [
        "Led scripting and direction",
        "Managed 4-member team",
        "Overcame production challenges",
        "National recognition"
      ],
      description: "A film highlighting the journey of overcoming learning challenges through determination and support",
      thumbnail: "/images/tgel-2022.jpeg",
      videoLink: "https://drive.google.com/file/d/1a_vI_E_L-k7baw-zRDXlGCDcrN68zsSR/view",
      type: "drive"
    },
    {
      title: "Virtual Tour of Kumbalgarh Fort",
      award: "Best Cinematography Award - INTACH's Filmit India Project",
      keyPoints: [
        "Historical documentation",
        "Advanced cinematography",
        "Green screen techniques",
        "Heritage preservation"
      ],
      description: "Cinematic exploration of historic architecture and cultural heritage",
      thumbnail: "/images/kumbalgarh.jpeg",
      videoLink: "https://drive.google.com/file/d/1V-wqgpxoPJS6WWUd-q6k9mVa2M8n01ps/view",
      type: "drive"
    },
    {
      title: "Manthan | Social Media & LGBTQ",
      award: "TGELF Reel to Real 2023 – Social Breakthrough Theme",
      keyPoints: [
        "Lead role performance",
        "Social impact focus",
        "Advanced editing",
        "Narrative storytelling"
      ],
      description: "A powerful exploration of social media's impact on identity and relationships",
      thumbnail: "/images/manthan.png",
      videoLink: "https://www.youtube.com/watch?v=7LoRyZpe1yg",
      type: "youtube"
    }
  ];

  const academicProjects = [
    {
      title: "Cracking the Sleep Code - Somnous Quaestio",
      award: "Special Mention - Shri R.S. Niamat Rai Rajpal Memorial Contest",
      description: "An innovative program analyzing sleep patterns and predicting potential disorders",
      technologies: ["Python", "Data Analysis", "Machine Learning"],
      keyPoints: [
        "Sleep pattern analysis",
        "Predictive modeling",
        "User-friendly interface",
        "Research methodology"
      ],
      thumbnail: "/images/ronith-project.jpeg",
      year: "2023",
      github: "https://github.com/ronith-engineer/Somnous-Quaestio"
    },
    {
    title: "LED Matrix Build",
    description: "An introductory Arduino-based project to display text on an LED Matrix to wish Mother's Day.",
    technologies: ["Arduino IDE", "Electronics"],
    keyPoints: [
      "Text display",
      "Circuit wiring",
      "Breadboard prototyping"
    ],
    thumbnail: "/images/led-matrix.png", // Save the uploaded image with this name
    year: "2025",
    github: "https://github.com/ronith-engineer/LED-Matrix-Arduino-Project.git"
  }

    {
      title: "More Projects Coming Soon",
      description: "Exciting new projects in development. Stay tuned!",
      technologies: ["Coming Soon"],
      thumbnail: "/images/coming-soon.avif",
      year: "2025",
      isPlaceholder: true
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      event: "66th Annual Award Ceremony",
      keyPoints: [
        "School Boys Topper",
        "Science Stream Topper",
        "Multiple Awards",
        "Academic Leadership"
      ],
      description: "Recognized for outstanding academic performance and leadership qualities",
      image: "/images/10th-class-top.jpeg"
    },
    {
      title: "AK Saha Quiz Competition",
      event: "Science Quiz Finalist",
      keyPoints: [
        "Advanced to Finals",
        "Complex Problem Solving",
        "Team Leadership",
        "Live Competition"
      ],
      description: "Led team through competitive science quiz, demonstrating knowledge and teamwork",
      image: "/images/ak-saha.jpeg"
    },
    {
      title: "Teaching Excellence",
      event: "Teachers' Day Leadership",
      keyPoints: [
        "Chemistry Teacher XI-B",
        "Class X Supervisor",
        "Effective Management",
        "Student Mentorship"
      ],
      description: "Demonstrated leadership through classroom management and student engagement",
      image: "/images/teacher.jpeg"
    }
  ];

  const academicScores = [
    {
      title: "12th Grade",
      value: "99.16%",
      label: "Predicted Score"
    },
    {
      title: "11th Grade",
      value: "93.2%",
      label: "Final Score"
    },
    {
      title: "10th Grade",
      value: "96%",
      label: "CBSE"
    },
    {
      title: "SAT",
      value: "1450",
      label: "Score"
    }
  ];

  const internationalExperience = [
    {
      title: "Glass Exhibition Fair",
      location: "Shanghai, China",
      year: "2023",
      keyPoints: [
        "Industrial Exposure",
        "Technical Knowledge",
        "Global Perspective",
        "Hands-on Learning"
      ],
      description: "Gained insights into glass processing machinery and international operations",
      image: "https://placehold.co/600x400/e2e8f0/475569?text=Glass+Exhibition+Fair+Shanghai"
    },
    {
      title: "Digitales PASCH-Jugendcamp",
      location: "Goethe Institute",
      year: "2022",
      keyPoints: [
        "German Language",
        "Cultural Exchange",
        "Interactive Learning",
        "Global Network"
      ],
      description: "Selected for prestigious German language program, enhancing language and cultural skills",
      image: "https://placehold.co/600x400/0099d1/ffffff?text=Goethe+Institute"
    },
    {
      title: "LADLI Foundation Trust Internship",
      location: "Delhi, India",
      year: "2023",
      keyPoints: [
        "Social Awareness",
        "Community Engagement",
        "Content Creation",
        "Public Health Education"
      ],
      highlights: [
        "Led school seminars",
        "Created educational articles",
        "Social media campaigns",
        "Public health initiatives"
      ],
      duration: "3 months",
      focusAreas: [
        "Menstrual hygiene",
        "Malnutrition awareness",
        "Child safety education",
        "WASH program implementation"
      ],
      description: "Led comprehensive social awareness campaigns through school seminars, article writing, and social media outreach, focusing on critical public health and social issues.",
      image: "/images/ladli-foundation.png"  
    }
  ];

  // Video handling functions
  const getYoutubeEmbedUrl = (url) => {
    const videoId = url.split('watch?v=')[1];
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  const getDriveEmbedUrl = (url) => {
    const fileId = url.split('/d/')[1]?.split('/')[0];
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return url;
  };

  const openVideo = (video) => {
    const embedUrl = video.type === 'youtube' 
      ? getYoutubeEmbedUrl(video.videoLink)
      : getDriveEmbedUrl(video.videoLink);
    setSelectedVideo({ ...video, embedUrl });
  };

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
  <div className="header-content">
    <div className="profile-image-wrapper">
      <img 
        src="/images/ronith-profile.jpg" 
        alt={personalInfo.name}
        className="profile-image"
      />
    </div>
    <div className="header-text">
      <div className="header-top">
        <div>
          <h1>{personalInfo.name}</h1>
          <h2>{personalInfo.school}</h2>
        </div>
        <a 
          href="/Ronith-Kartikeyan-CV.pdf" 
          download="Ronith_Kartikeyan_CV.pdf"
          className="download-cv-btn"
        >
          <Download size={18} />
          Download CV
        </a>
      </div>
      <div className="bio-tags">
        {personalInfo.bio.map((point, index) => (
          <span key={index} className="bio-tag">{point}</span>
        ))}
      </div>
    </div>
  </div>
</header>

      {/* Academic Excellence */}
      <section className="section">
        <div className="section-title">
          <GraduationCap size={24} />
          <h2>Academic Excellence</h2>
        </div>
        <div className="stats-grid">
          {academicScores.map((score, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{score.value}</div>
              <div className="stat-title">{score.title}</div>
              <div className="stat-label">{score.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Filmmaking Section */}
      <section className="section">
        <div className="section-title">
          <Film size={24} />
          <h2>Award-Winning Films</h2>
        </div>
        <div className="video-grid">
          {filmProjects.map((project, index) => (
            <div 
              key={index} 
              className="video-card"
              onClick={() => openVideo(project)}
            >
              <div className="video-thumbnail">
                <img src={project.thumbnail} alt={project.title} />
                <div className="play-overlay">
                  <Video size={40} />
                </div>
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p className="award">{project.award}</p>
                <p className="description">{project.description}</p>
                <div className="key-points">
                  {project.keyPoints.map((point, i) => (
                    <span key={i} className="key-tag">{point}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section">
        <div className="section-title">
          <Trophy size={24} />
          <h2>Achievements & Recognition</h2>
        </div>
        <div className="gallery-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="gallery-card">
              <img 
                src={achievement.image} 
                alt={achievement.title}
                className="gallery-image"
              />
              <div className="gallery-content">
                <h3>{achievement.title}</h3>
                <p className="event">{achievement.event}</p>
                <p className="description">{achievement.description}</p>
                <div className="key-points">
                  {achievement.keyPoints.map((point, i) => (
                    <span key={i} className="key-tag">{point}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Projects */}
      <section className="section">
        <div className="section-title">
          <Code size={24} />
          <h2>Academic Projects</h2>
          <a 
            href="https://github.com/ronith-engineer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-profile-link"
          >
            <Github size={20} />
            <span>View GitHub Profile</span>
          </a>
        </div>
        <div className="projects-grid">
          {academicProjects.map((project, index) => (
            <div key={index} className={`project-card ${project.isPlaceholder ? 'placeholder' : ''}`}>
              <div className="project-header">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <span className="project-year">{project.year}</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {project.award && !project.isPlaceholder && (
                  <p className="project-award">{project.award}</p>
                )}
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                {!project.isPlaceholder && project.keyPoints && (
                  <div className="key-points">
                    {project.keyPoints.map((point, i) => (
                      <span key={i} className="key-tag">{point}</span>
                    ))}
                  </div>
                )}
                
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <Github size={16} />
                    <span>View on GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* International Experience */}
      <section className="section">
        <div className="section-title">
          <Globe size={24} />
          <h2>International Experience</h2>
        </div>
        <div className="gallery-grid">
          {internationalExperience.map((experience, index) => (
            <div key={index} className="gallery-card">
              <img 
                src={experience.image} 
                alt={experience.title}
                className="gallery-image"
              />
              <div className="gallery-content">
                <h3>{experience.title}</h3>
                <p className="location">{experience.location} • {experience.year}</p>
                <p className="description">{experience.description}</p>
                <div className="key-points">
                  {experience.keyPoints.map((point, i) => (
                    <span key={i} className="key-tag">{point}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="close-button"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={24} />
            </button>
            <h3>{selectedVideo.title}</h3>
            <div className="video-container">
              <iframe
                src={selectedVideo.embedUrl}
                title={selectedVideo.title}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
