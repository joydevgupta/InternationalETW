import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact">
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
