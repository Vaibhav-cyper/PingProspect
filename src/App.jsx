import HeroComponent from './components/Hero/HeroComponent.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import FeatureComponent from './components/Feature/FeatureComponent.jsx';
import PricingComponent from './components/Pricing/PricingComponent.jsx';
import FAQComponent from './components/FAQ/FAQComponent.jsx';
import Footer from './components/Footer/Footer.jsx';
import PrivacyPolicy from './components/privacy-policy/Privacy-policy.jsx'
import Termnsservice from './components/terms-of-service/Terms-service.jsx'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet/>
      <Footer />


      {/* <Navbar />
      <HeroComponent/>
      <FeatureComponent/>
      <PricingComponent/>
      <FAQComponent/>
      <Footer /> */}
    </div>
  );
}

export default App


