import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import CompanyIntroduction from "../components/CompanyIntroduction";
import Mission from "../components/Mission";
import ProductHighlights from "../components/ProductHighlights";

const LandingPage = () => {
  return (
    <div>
      
      <Hero />
      <CompanyIntroduction />
      <ProductHighlights />
      <Mission />
  
    </div>
  );
}

export default LandingPage