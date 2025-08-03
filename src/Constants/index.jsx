import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
  { name: "Home", icon: <AiFillHome />, path: "/" },
  {
    name: "Trends",
    icon: <MdLocalFireDepartment />,
    path: "trending",
  },
  {
    name: "Music",
    icon: <CgMusicNote />,
    path: "müzik",
  },
  { name: "Films", icon: <FiFilm />, path: "filmler" },
  { name: "Live", icon: <MdLiveTv />, path: "canlı" },
  {
    name: "Game",
    icon: <IoGameControllerSharp />,
    path: "oyun",
  },
  {
    name: "News",
    icon: <ImNewspaper />,
    path: "haberler",
  },
  {
    name: "Sport",
    icon: <GiDiamondTrophy />,
    path: "sport",
  },
  {
    name: "Educator",
    icon: <RiLightbulbLine />,
    path: "eğitim",
  },
  {
    name: "Beauty & Cosmetics",
    icon: <GiEclipse />,
    path: "kozmetik",
    divider: true,
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  {
    name: "Report History",
    icon: <AiOutlineFlag />,
    type: "menu",
  },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  {
    name: "Send feedback",
    icon: <RiFeedbackLine />,
    type: "menu",
  },
];
