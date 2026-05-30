import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

function Contact() {

  return (

    <div className="contact-section" id="contact">

      <motion.h1
        initial={{ opacity:0, y:-100 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
      >
        Contact Me
      </motion.h1>

      <motion.div
        className="contact-container"

        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}

        transition={{ delay:0.5 }}
      >

        <div className="contact-card">

          <FaEnvelope className="contact-icon" />

          <h2>Email</h2>

          <p>
            anaghajadhav777@gmail.com
          </p>

        </div>

        <div className="contact-card">

          <FaPhone className="contact-icon" />

          <h2>Phone</h2>

          <p>
            +91 7776093759
          </p>

        </div>

        <div className="contact-card">

          <FaGithub className="contact-icon" />

          <h2>GitHub</h2>

          <a
            href="https://github.com/AnuJadhav123"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub
          </a>

        </div>

        <div className="contact-card">

          <FaLinkedin className="contact-icon" />

          <h2>LinkedIn</h2>

          <a
            href="https://linkedin.com/in/anagha-jadhav-259b601bb"
            target="_blank"
            rel="noreferrer"
          >
            Visit LinkedIn
          </a>

        </div>

      </motion.div>

    </div>
  );
}

export default Contact;