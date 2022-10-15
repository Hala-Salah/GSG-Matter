import "./App.css";
import DarkBar from "./components/DarkBar";
import AboutMatter from "./components/AboutMatter";
import Shop from "./components/Shop";
import Featured from "./components/Featured"
import Footer from "./components/PageFooter";
import Slider from "./components/Slider";
import NavScrollExample from "./components/NavBar";
import Explore from "./components/Explore";
import AsSeenOn from "./components/AsSeen";

function App() {
  return (
    <>
      <DarkBar />
      <NavScrollExample/>
      <Slider/>
      <div className="main-container">
      <Featured/>
      <AboutMatter/>
      <Explore/>
      <Shop/>
      <AsSeenOn/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
