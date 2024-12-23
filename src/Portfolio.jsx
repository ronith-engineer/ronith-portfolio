import React, { useState } from 'react';
import { Film, Trophy, GraduationCap, Award, Video, X, Globe, Heart } from 'lucide-react';
import './styles/Portfolio.css';

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const personalInfo = {
    name: "Ronith Kartikeyan",
    school: "Springdales School, Pusa Road",
    grade: "12th Grade",
    bio: "A highly motivated and academically accomplished student with excellence in academics and filmmaking, securing top positions in national competitions and maintaining outstanding academic performance."
  };

  const filmProjects = [
    {
      title: "Inclusive Learning",
      award: "All India Second Position - TGELF 2022",
      description: "A film about a student overcoming dyslexia with family support",
      thumbnail: "/images/tgel-2022.jpeg",
      videoLink: "https://drive.google.com/file/d/1a_vI_E_L-k7baw-zRDXlGCDcrN68zsSR/view",
      type: "drive"
    },
    {
      title: "Virtual Tour of Kumbalgarh Fort",
      award: "Best Cinematography Award - INTACH's Filmit India Project",
      description: "Cinematic exploration of historic architecture",
      thumbnail: "/images/kumbalgarh.jpeg",
      videoLink: "https://drive.google.com/file/d/1V-wqgpxoPJS6WWUd-q6k9mVa2M8n01ps/view",
      type: "drive"
    },
    {
      title: "Manthan | A Short film on Social Media and LGBTQ ",
      award: "Personal Video Film",
      description: "LGBTQ",
      thumbnail: "/images/manthan.png",  // Consider changing this to a unique thumbnail
      videoLink: "https://www.youtube.com/watch?v=7LoRyZpe1yg",
      type: "youtube"
    }
  ];

  const achievements = [
    {
      title: "School Boys Topper & Science Topper",
      event: "66th Annual Award Ceremony",
      description: "Received multiple awards including Lalita Khare Memorial Trophy",
      image: "/images/10th-class-top.jpeg"
    },
    {
      title: "AK Saha Quiz Competition",
      description: "Finalist in the Science Quiz Competition",
      image: "/images/ak-saha.jpeg"
    },
    {
      title: "Teaching Excellence",
      description: "Chemistry Teacher for Class XI and Supervisor for Class X",
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
      description: "Understanding glass processing machinery and operations",
      image: "/images/shanghai.jpg"
    },
    {
      title: "Digitales PASCH-Jugendcamp",
      location: "Goethe Institute",
      year: "2022",
      description: "International German language workshop",
      image: "/images/goethe.jpg"
    }
  ];

  // Function to extract YouTube video ID
  const getYoutubeEmbedUrl = (url) => {
    const videoId = url.split('watch?v=')[1];
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  // Function to convert Google Drive view URL to embed URL
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
          <div className="header-text">
            <h1>{personalInfo.name}</h1>
            <h2>{personalInfo.school}</h2>
            <p className="bio">{personalInfo.bio}</p>
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
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Gallery */}
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
                {achievement.event && (
                  <p className="event">{achievement.event}</p>
                )}
                <p>{achievement.description}</p>
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
                <p>{experience.description}</p>
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