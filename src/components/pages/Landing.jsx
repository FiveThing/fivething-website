import { BsChevronCompactDown } from "react-icons/bs";
import { ReactComponent as BlobsHome } from "../../assets/img/Blobs-Home.svg";
import { ReactComponent as HomeUndraw } from "../../assets/img/Home-undraw.svg";

const Landing = () => {
  return (
    <div className="h-screen container mx-auto flex relative items-center justify-center md:justify-start">
      <div className="mx-auto md:mx-28 space-y-3.5 z-50">
        <h1 className="font-majorMono text-6xl sm:text-7xl md:text-9xl ">
          HELLO,
        </h1>
        <p className="text-sm sm:text-2xl">
          We are Student Developers from
          <br />
          Polytechnic University of the Philippines
        </p>
      </div>

      <BsChevronCompactDown
        className="z-10 absolute bottom-20 right-0 left-0 m-auto text-4xl animate-bounce hover:text-blob-f98 transition ease-in-out cursor-pointer"
        onClick={() => window.fullpage_api.moveSectionDown()}
      />

      <BlobsHome className="hidden lg:block absolute -right-48 top-0" />
      <HomeUndraw className="hidden lg:block z-10 absolute -right-40" />
    </div>
  );
};

export default Landing;
