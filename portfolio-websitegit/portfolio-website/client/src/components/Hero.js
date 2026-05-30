import { motion } from "framer-motion";

function Hero() {
  return (
<div className="hero" id="home">
      <motion.h1
        initial={{ opacity:0, y:-100 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
      >
        Hi, I'm Anagha Jadhav
      </motion.h1>

      <motion.h2
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1 }}
      >
        Full Stack Developer | M.Tech DSAI Student
      </motion.h2>

      <motion.p
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1.5 }}
      >
        Passionate about building modern web applications and solving real-world problems.
      </motion.p>

      <button className="btn">
        View My Work
      </button>
      <div className="hero-buttons">

  <a href="/resume.pdf" download>
    <button className="btn">
      Download Resume
    </button>
  </a>

  <a
    href="https://github.com/AnuJadhav123"
    target="_blank"
    rel="noreferrer"
  >
    <button className="btn">
      GitHub
    </button>
  </a>

  <a
    href="https://linkedin.com/in/anagha-jadhav-259b601bb"
    target="_blank"
    rel="noreferrer"
  >
    <button className="btn">
      LinkedIn
    </button>
  </a>

</div>
    </div>
  );
}

export default Hero;