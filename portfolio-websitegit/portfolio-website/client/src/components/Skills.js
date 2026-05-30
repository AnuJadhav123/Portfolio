import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt
} from "react-icons/fa";

function Skills() {

  const skills = [
    {
      icon: <FaReact />,
      name: "React JS"
    },

    {
      icon: <FaNodeJs />,
      name: "Node JS"
    },

    {
      icon: <FaHtml5 />,
      name: "HTML5"
    },

    {
      icon: <FaCss3Alt />,
      name: "CSS3"
    },

    {
      icon: <FaJs />,
      name: "JavaScript"
    },

    {
      icon: <FaGitAlt />,
      name: "Git & GitHub"
    }
  ];

  return (

    <div className="skills-section" id="skills">

      <h1>My Skills</h1>

      <div className="skills-container">

        {skills.map((skill, index) => (

          <motion.div
            className="skill-card"
            key={index}

            initial={{ opacity:0, y:100 }}
            whileInView={{ opacity:1, y:0 }}

            transition={{
              duration:0.5,
              delay:index * 0.2
            }}

            whileHover={{
              scale:1.1
            }}
          >

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h2>{skill.name}</h2>

          </motion.div>

        ))}

      </div>

    </div>

  );
}

export default Skills;