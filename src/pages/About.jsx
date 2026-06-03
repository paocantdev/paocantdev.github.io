import '../styles/about.css'

export default function About() {
  const experience = [
    {
      year: "Present (2026)",
      title: "Technical Support",
      company: "Department of Education - Divisional Offices (Las Pinas City)",
      description: "Experienced in troubleshooting hardware, software, and network-related issues."
    },
    {
      year: "July - December 2025",
      title: "BSCS Faculty",
      company: "PHINMA - St. Jude College Dasmariñas Cavite",
      description: "Experienced teaching BSCS students, where I delivered lessons on technical topics, assisted students with their learning needs, and helped them strengthen their understanding of computer science concepts."
    },
    {
      year: "2021 - 2022",
      title: "Freelance Game Tester",
      company: "GeekNation",
      description: "Experienced in testing games, reporting bugs, verifying fixes, and ensuring smooth gameplay and functionality."
    }
  ]

  const education = [
    {
      year: "2021 - 2025",
      degree: "Bachelor of Science in Information Technology",
      school: "Cavite State University - Bacoor Campus",
      description: "Graduated with a strong foundation in technical and logical thinking, equipped with hands-on experience from internships and academic projects."
    }
  ]

  return (
    <div className="about">
      <h1>About Me</h1>
      
      <section className="about-intro">
        <h2>Who I Am</h2>
        <p>
          A highly motivated and dedicated recent graduate with BSIT degree from CvSU - Bacoor Campus.
Equipped with a strong foundation in technical and logical thinking, along with hands-on experience gained
through internships, projects, and academic work.
        </p>
        <p>
          I believe in continuous learning and staying updated with the latest trends in web development.
          When I'm not coding, you can find me troubleshooting technical issues, managing a project,
          or exploring new technologies.
        </p>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="timeline">
          {experience.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="year">{item.year}</span>
                <h3>{item.title}</h3>
                <p className="company">{item.company}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="timeline">
          {education.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="year">{item.year}</span>
                <h3>{item.degree}</h3>
                <p className="school">{item.school}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
