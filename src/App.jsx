import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Loader , Navbar, Tech, Works} from "./components/components";
import { StarsCanvas } from "./components/components";

const App = () => {
  return (
   <BrowserRouter>
   <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat">
        <Navbar />
        <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Feedbacks />
    <div className="relative z-0">
        <Contact />
        <StarsCanvas />
    </div>
   </div>

   </BrowserRouter>
  );
}

export default App;
