// src/components/About.tsx

import React from "react";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the element is visible
    triggerOnce: true, // Only trigger once
  });

  return (
    <section
      id="about"
      ref={ref}
      className={`animate-section ${inView ? "in-view" : ""}`}
    >
      <h2>About Me</h2>
      <img
        src="/path/to/profile-picture.jpg"
        alt="Profile Picture"
        className="profile-picture"
      />
      <p>
        Hello! My name is [Tutor's Name], an experienced online International
        English Tutor with over [Number of Years] years of experience. I
        specialize in [Specializations], and I am passionate about helping
        students achieve their language goals.
      </p>
    </section>
  );
};

export default About;
