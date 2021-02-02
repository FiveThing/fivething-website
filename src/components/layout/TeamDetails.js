import andreiPhoto from "../../assets/img/andrei.JPG";
import glendellPhoto from "../../assets/img/glendell.png";
import ravenPhoto from "../../assets/img/raven.jpg";
import patPhoto from "../../assets/img/pat.jpg";

import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

export const TeamDetails = [
  {
    id: 1,
    photo: andreiPhoto,
    details: {
      name: "Andrei Zabala",
      role: "Back-end Developer",
      links: [
        {
          id: 1,
          socmed: "https://www.facebook.com/l03e1t3az",
          logo: <SiFacebook />,
        },
        {
          id: 2,
          socmed: "https://github.com/Andreizabala",
          logo: <SiGithub />,
        },
      ],
    },
  },
  {
    id: 2,
    photo: glendellPhoto,
    details: {
      name: "Glendell Bringino",
      role: "Front-end Developer",
      links: [
        {
          id: 1,
          socmed: "https://www.facebook.com/glendell03/",
          logo: <SiFacebook />,
        },
        {
          id: 2,
          socmed: "https://github.com/glendell03",
          logo: <SiGithub />,
        },
        {
          id: 3,
          socmed: "https://www.linkedin.com/in/glendell03/",
          logo: <SiLinkedin />,
        },
      ],
    },
  },
  {
    id: 3,
    photo: ravenPhoto,
    details: {
      name: "Raven Lantin",
      role: "UI/UX Designer",

      links: [
        {
          id: 1,
          socmed: "https://www.facebook.com/ravenlntn",
          logo: <SiFacebook />,
        },
        {
          id: 2,
          socmed: "https://github.com/ravenlntn",
          logo: <SiGithub />,
        },
        {
          id: 3,
          socmed: "https://www.linkedin.com/in/ravenlntn/",
          logo: <SiLinkedin />,
        },
      ],
    },
  },
  {
    id: 4,
    photo: patPhoto,
    details: {
      name: "Patricia Candedeir",
      role: "UI/UX Designer",
      links: [
        {
          id: 1,
          socmed: "https://www.facebook.com/pieneysee",
          logo: <SiFacebook />,
        },
        {
          id: 2,
          socmed: "https://github.com/REESEE-Alt4",
          logo: <SiGithub />,
        },
      ],
    },
  },
];
