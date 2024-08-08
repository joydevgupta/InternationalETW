// src/components/Services.tsx

import React from "react";
import { useInView } from "react-intersection-observer";

const Services: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="services"
      ref={ref}
      className={`animate-section ${inView ? "in-view" : ""}`}
    >
      <h2>Services Offered</h2>
      <p>I offer a variety of services tailored to your needs, including:</p>
      <ul>
        <li>One-on-One Lessons</li>
        <li>Group Lessons</li>
        <li>Exam Preparation</li>
        <li>Business English</li>
        <li>Academic English</li>
      </ul>
    </section>
  );
};

export default Services;
