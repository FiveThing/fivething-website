import "../../index.css";

import BlobsLanding from "../../assets/img/blobs-landing.svg";
import { ReactComponent as Logo } from "../../assets/img/Alt-f4-New-Logo.svg";
import { BsChevronCompactDown } from "react-icons/bs";
import NavigationText from "../layout/NavigationText";

const Landing = () => {
  return (
    <div className="h-screen flex relative items-center select-none">
      <NavigationText navText="HOME" />

      <div className="mx-20 space-y-3.5 cursor-default">
        <div className="flex items-center text-8xl">
          <Logo className="transform scale-90" />
          <p className="font-majorMono">LT F4</p>
        </div>

        <div className="cursor-default">
          <p className="font-jura text-2xl">Student Developers from</p>
          <p className="font-jura text-2xl">
            Polytechnic University of the Philippines - Manila
          </p>
        </div>
      </div>

      <img
        className="absolute right-0 bottom-0 h-full"
        src={BlobsLanding}
        alt="BlobsLanding"
      />

      <BsChevronCompactDown
        className="z-10 absolute bottom-20 right-0 left-0 m-auto text-4xl animate-bounce hover:text-blob-f98 transition ease-in-out cursor-pointer"
        onClick={() => window.fullpage_api.moveSectionDown()}
      />
    </div>
  );
};

export default Landing;
