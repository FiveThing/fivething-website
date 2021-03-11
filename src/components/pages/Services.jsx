import React from "react";

import "../../assets/css/services.css";
import {RiRocketLine} from "react-icons/ri"

const Services = () => {
    return (
        <div className="h-screen container mx-auto flex flex-col items-center md:justify-center">
            <div className="mt-16 md:mt-0">
                <h1 className="font-righteous text-2xl text-center mx-8 py-4 md:text-4xl lg:text-5xl xl:text-6xl">
                    WHAT WE OFFER
                </h1>
                <p className="leading-relaxed md:text-xl mb-10 text-center">
                We want to listen to your creative mindset, idea, design,  <br/>
                and how it flows on what you want on your website.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-24 text-center">
                <div className="card">
                    <RiRocketLine/>
                    <p className="">Website</p>
                    <div className="liquid bg-pallete-fb8"></div>
                </div>
                <div className="card">
                    <span>UI/UX Design</span>
                    <div className="liquid bg-pallete-ffb"></div>
                </div>
            </div>
        </div>
        
    );
};

export default Services;