import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Solutions from "./components/Solution";
import CoreBanking from "./components/CoreBanking";
import Marquee from "./components/Marquee";
import DigitalBanking from "./components/DigitalBanking";
import Insights from "./components/Insights";
import BannerFooter from "./components/BannerFooter";
import CaseStudies from "./components/CaseStudies";
import DigitalBanner from "./components/DigitalBanner";
function App() {
  return (
     <div className="overflow-x-hidden">
      <Header />
      <Dashboard />
      <Solutions />
      <CoreBanking />
      <Banner/>
      <Marquee />
      <DigitalBanking />
      <DigitalBanner />
      <Insights />
      <CaseStudies />
      <BannerFooter/>
      <Footer/>
    </div>
  );
}

export default App;
