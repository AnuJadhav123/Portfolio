import { motion } from "framer-motion";

function Experience() {

  return (

    <div className="experience-section">

      <h1>Experience</h1>

      <motion.div
        className="experience-card"

        initial={{ opacity:0, x:-100 }}
        whileInView={{ opacity:1, x:0 }}

        transition={{ duration:1 }}
      >

        <h2>
          Junior Software Developer Intern
        </h2>

        <h3>
          Rego Digital Solutions Pvt Ltd
        </h3>

        <span>
          March 2023 - June 2024
        </span>

        <p>
          Worked on Recipe Website,
          RealTime Chat Application,
          and Review Form using ReactJS.
          Developed responsive modern UI
          and frontend functionalities.
        </p>

      </motion.div>

    </div>
  );
}

export default Experience;