import "./UserLandingPage.css";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="UserLandingPage">
      <Home />
      <About />
      <Work />
      <Testimonial />
      {/* <Contact /> */}
      <Footer/>
    </div>
  );
}

export default App;
