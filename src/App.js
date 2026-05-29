import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import CTABanner from "./components/CTABanner";
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
      <CTABanner/>
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
