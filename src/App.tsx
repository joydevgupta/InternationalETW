import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default App;
