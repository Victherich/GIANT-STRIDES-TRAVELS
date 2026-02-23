import React from "react";
import Hero from "./Hero";
import Services from "./Services";

import PopularTours from "./PopularTours";
import Testimonials from "./Testimonials";

import WhyAndHow from "./WhyAndHow";
import EngagementSection from "./EngagementSection";
import AboutBrief from "./AboutBrief";


const LandingPage =()=>{
    return(
        <div>
            <Hero/>
            <Services/>
            
             <PopularTours/>
             <WhyAndHow/>
            <EngagementSection/>
            <AboutBrief/>
           <Testimonials/>
        </div>
    )
}

export default LandingPage