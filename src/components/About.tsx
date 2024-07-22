import React from "react";

const About: React.FC = () => {
  return (
    <section id="about">
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
