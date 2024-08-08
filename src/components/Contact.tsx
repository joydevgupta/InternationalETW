// src/components/Contact.tsx

import React from "react";
import { useInView } from "react-intersection-observer";

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="contact"
      ref={ref}
      className={`animate-section ${inView ? "in-view" : ""}`}
    >
      <h2>Contact Me</h2>
      <p>
        If you have any questions or would like to book a lesson, please contact
        me:
      </p>
      <ul>
        <li>
          Email: <a href="mailto:email@example.com">email@example.com</a>
        </li>
        <li>Phone: [Phone Number]</li>
        <li>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/yourprofile">yourprofile</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
