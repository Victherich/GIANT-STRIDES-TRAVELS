import React from "react";
import Hero from "./Hero";
import Services from "./Services";

import PopularTours from "./PopularTours";
import Testimonials from "./Testimonials";

import WhyAndHow from "./WhyAndHow";


const LandingPage =()=>{
    return(
        <div>
            <Hero/>
            <Services/>
            
             <PopularTours/>
             <WhyAndHow/>
            
           <Testimonials/>
        </div>
    )
}

export default LandingPage