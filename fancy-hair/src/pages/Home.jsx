import React from "react";
import HeroSection from "../components/HeroComponent/HeroComponent";
import ToolComponent from "../components/Toolcomponent/Toolcomponent";
import ServiceComponent from "../components/Servicecomponent/Servicecomponent";
import Productcomponent from "../components/Productcomponent/Productcomponent"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ToolComponent/>
      <ServiceComponent />
      <Productcomponent />
    </div>
  );
};

export default Home;