import { BrowserRouter } from "react-router-dom";

import {
  Navbar,
  Hero,
  About,
  Experience,
  Education,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Education />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <footer className="bg-primary text-white text-center py-6">
          <p>© 2022 Engr. Akramul Hoque. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
