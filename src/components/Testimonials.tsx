// src/components/Testimonials.tsx

import React from "react";
import { useInView } from "react-intersection-observer";

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`animate-section ${inView ? "in-view" : ""}`}
    >
      <h2>Testimonials</h2>
      <blockquote>
        <p>
          "[Tutor's Name] is an excellent tutor! I improved my English skills
          significantly with their help." - [Student's Name], [Country]
        </p>
      </blockquote>
      <blockquote>
        <p>
          "I highly recommend [Tutor's Name] for anyone looking to enhance their
          English proficiency." - [Student's Name], [Country]
        </p>
      </blockquote>
    </section>
  );
};

export default Testimonials;
