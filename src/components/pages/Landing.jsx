import "../../index.css";

import { ReactComponent as BlobsLanding } from "../../assets/img/blobs-landing.svg";
import { ReactComponent as Logo } from "../../assets/img/Alt-f4-New-Logo.svg";

const Landing = () => {
  return (

    <div className="h-screen flex relative items-center">
      <BlobsLanding className="absolute right-0 bottom-0 h-full w-2/4"/>

    <div className="mx-60 space-y-3.5">
      <div className="flex items-center text-8xl"><Logo className="transform scale-90"/>
      <p className="font-majorMono">LT F4</p>
      </div>

      <div>
        <p className="font-jura text-2xl">Student Developers from</p>
        <p className="font-jura text-2xl">Polytechnic University of the Philippines - Manila</p>
        <p className="font-jura text-2xl">Delete mo nalang HAHAAH </p>
      </div>      
    </div>

    </div>
    

    
  );
};

export default Landing;
