import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

import AndreiPhoto from "../../assets/img/AndreiPhoto.png";
import GlendellPhoto from "../../assets/img/GlendellPhoto.png";
import JinnielPhoto from "../../assets/img/JinnielPhoto.png";
import PatPhoto from "../../assets/img/PatPhoto.png";
import RavenPhoto from "../../assets/img/RavenPhoto.png";

export const TeamDetails = [
  {
    id: 1,
    photo: GlendellPhoto,
    details: {
      name: "Glendell Bringino",
      role: "Full Stack Developer",
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
    id: 2,
    photo: JinnielPhoto,
    details: {
      name: "Jinniel Bautista",
      role: "Back End Developer",
      links: [
        {
          id: 1,
          socmed: "https://www.facebook.com/jinniel.bautista",
          logo: <SiFacebook />,
        },
        {
          id: 2,
          socmed: "https://github.com/jinnielqtqt",
          logo: <SiGithub />,
        },
        {
          id: 3,
          socmed: "linkedin.com/in/jinniel-bautista-8bb6a6207",
          logo: <SiLinkedin />,
        },
      ],
    },
  },
  {
    id: 3,
    photo: RavenPhoto,
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
    photo: PatPhoto,
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
  {
    id: 5,
    photo: AndreiPhoto,
    details: {
      name: "Andrei Zabala",
      role: "Back End Developer",
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
        {
          id: 3,
          socmed: "https://www.linkedin.com/in/andrei-zabala-95880b180/",
          logo: <SiLinkedin />,
        },
      ],
    },
  },
];
