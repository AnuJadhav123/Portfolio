import { motion } from "framer-motion";

function About() {
  return (
<div className="about" id="about">
      <motion.h1
        initial={{ opacity:0, x:-100 }}
        whileInView={{ opacity:1, x:0 }}
        transition={{ duration:1 }}
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ delay:0.5 }}
      >
        I am Anagha Jadhav, currently pursuing M.Tech in
        Data Science and Artificial Intelligence at JSPM University Pune.
        I am passionate about Full Stack Web Development,
        ReactJS, and building modern responsive applications.

        I have completed MERN Stack training and worked as
        a Junior Software Developer Intern at Rego Digital Solutions.
      </motion.p>

    </div>
  );
}

export default About;