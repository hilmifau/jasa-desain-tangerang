import styles from "./page.module.css";
import './globals.css';
import landingPageData from './data/data.json'
import Navigation from "./components/navigation";
import Header from './components/header';
import About from './components/about';
import Services from "./components/services";
import Features from './components/features';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Contact from "./components/contact";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Home() {

  return (
    <div className="App">
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Features data={landingPageData.Features} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />
      <div
        style={{
          position: "sticky",
          float: "right",
          bottom: "20px",
          right: "20px",
        }}
      >
        <Button variant="success">
          <FontAwesomeIcon icon={faWhatsapp} />
          <span>{"   "}</span>
          Whatsapp
        </Button>
      </div>

    </div>
  );
}
