import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Qmsomos from "./components/Qmsomos";
import Sustentabilidade from "./components/Sus";
import Contacto from "./components/Contacto";
import Service from "./components/Service";
import bck from "./assets/imgfndqm.svg";

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <img
        src={bck}
        alt=""
        className="absolute w-screen h-screen z-5 top-300 lg:top-600"
      />
      <Qmsomos />
      <Service />
      <Sustentabilidade />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
