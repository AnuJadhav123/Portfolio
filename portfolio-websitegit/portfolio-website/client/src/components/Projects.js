import { motion } from "framer-motion";

function Projects() {

  const projects = [

  {
    title:"Vaccination Tracking System",
    desc:"Web application to track vaccinated and non-vaccinated people during the coronavirus pandemic.",
    github:"https://github.com/AnuJadhav123"
  },

  {
    title:"Recipe Website",
    desc:"ReactJS based recipe application with modern UI and seamless cooking experience.",
    github:"https://github.com/AnuJadhav123/RecipeApp"
  },

  {
    title:"Miracle Beauty Parlor & Spa",
    desc:"Desktop based management system sponsored by Miracle Beauty Parlor & Spa.",
    github:"https://github.com/AnuJadhav123"
  },

  {
    title:"RealTime Chat App",
    desc:"Modern chat application with real-time messaging functionality.",
    github:"https://github.com/AnuJadhav123"
  }

];

  return (

    <div className="projects-section" id="projects">

      <h1>Projects</h1>

      <div className="projects-container">

        {projects.map((project,index)=>(

          <motion.div
            className="project-card"
            key={index}

            initial={{ opacity:0, scale:0.5 }}
            whileInView={{ opacity:1, scale:1 }}

            transition={{
              duration:0.5,
              delay:index * 0.2
            }}

            whileHover={{
              y:-15
            }}
          >

            <h2>{project.title}</h2>

            <p>{project.desc}</p>

            <a
  href={project.github}
  target="_blank"
  rel="noreferrer"
>
  <button className="project-btn">
    View Project
  </button>
</a>

          </motion.div>

        ))}

      </div>

    </div>

  );
}

export default Projects;