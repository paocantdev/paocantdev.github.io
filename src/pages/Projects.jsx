import { useState } from 'react'
import { FaImages, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import '../styles/projects.css'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: "Project: DIWATA",
      description: "Designed and developed an Inventory Management System that streamlines inventory tracking, stock monitoring, and product management while improving accuracy and operational efficiency.",
      tags: ["PHP", "CSS", "JavaScript", "MySQL"],
      photos: [
        "/projects/diwata/photo1.jpg",
        "/projects/diwata/photo2.jpg",
        "/projects/diwata/photo3.jpg",
        "/projects/diwata/photo4.jpg"
      ],
      live: null,
      image: "/projects/diwata/logo.png"
    },
    {
      id: 2,
      title: "Inner Sparc Realty",
      description: "A real estate platform that showcases property listings, facilitates property inquiries, and provides homebuying information for clients.",
      tags: ["WordPress", "MySQL"],
      photos: [
        "/projects/inner-sparc/photo1.jpg",
        "/projects/inner-sparc/photo2.jpg",
        "/projects/inner-sparc/photo3.jpg",
        "/projects/inner-sparc/photo4.jpg",
        "/projects/inner-sparc/photo5.jpg",
      ],
      live: "https://www.innersparcrealty.com/",
      image: "/projects/inner-sparc/logo.jpg"
    },
    {
      id: 3,
      title: "SNHS: MIS",
      description: "A management information system for tracking student records, attendances, and academic forms requirements.",
      tags: ["Laravel", "MySQL", "JavaScript", "CSS"],
      photos: [
        "/projects/snhs-mis/photo1.jpg",
        "/projects/snhs-mis/photo2.jpg",
        "/projects/snhs-mis/photo3.jpg",
        "/projects/snhs-mis/photo4.jpg",
        "/projects/snhs-mis/photo5.jpg",
        "/projects/snhs-mis/photo6.jpg",
      ],
      live: null,
      image: "/projects/snhs-mis/logos.png"
    },
    {
      id: 4,
      title: "MiniMartRetailSystem",
      description: "A report generation system for a mini-mart that generates sales reports, inventory reports, and financial summaries to help the business make informed decisions and optimize operations.",
      tags: ["PHP", "MySQL", "JavaScript", "CSS"],
      photos: [
        "/projects/mini-mart/photo1.jpg",
        "/projects/mini-mart/photo2.jpg",
        "/projects/mini-mart/photo3.jpg"
      ],
      live: null,
      image: "/projects/mini-mart/logos.jpg"
    },  
  ]

  const openPhotos = (project) => {
    setSelectedProject(project)
    setCurrentPhotoIndex(0)
  }

  const closePhotos = () => {
    setSelectedProject(null)
    setCurrentPhotoIndex(0)
  }

  const nextPhoto = () => {
    if (selectedProject) {
      setCurrentPhotoIndex((prev) => (prev + 1) % selectedProject.photos.length)
    }
  }

  const prevPhoto = () => {
    if (selectedProject) {
      setCurrentPhotoIndex((prev) => (prev - 1 + selectedProject.photos.length) % selectedProject.photos.length)
    }
  }

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <p className="page-intro">
        Here are some projects I've worked on. Each showcases different technologies and problem-solving approaches.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <button onClick={() => openPhotos(project)} className="link-btn">
                <FaImages /> Photos
              </button>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-btn">
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closePhotos}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closePhotos}>
              <FaTimes />
            </button>
            <h2>{selectedProject.title}</h2>
            <div className="photo-gallery">
              <img src={selectedProject.photos[currentPhotoIndex]} alt={`${selectedProject.title} photo ${currentPhotoIndex + 1}`} />
              <div className="photo-controls">
                <button className="nav-btn" onClick={prevPhoto}>
                  <FaChevronLeft />
                </button>
                <span className="photo-counter">{currentPhotoIndex + 1} / {selectedProject.photos.length}</span>
                <button className="nav-btn" onClick={nextPhoto}>
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
