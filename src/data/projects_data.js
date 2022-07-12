import tezosCapture from "../assets/images/portfolio/screen-capture (4) (2).gif";
import NBACapture from "../assets/images/portfolio/screen-capture (2) (2).gif";
import etsyCapture from "../assets/images/portfolio/screen-capture (3) (2).gif";
import wordleCapture from "../assets/images/portfolio/screen-capture (6) (2).gif";
import chatterCapture from "../assets/images/portfolio/screen-capture (9).gif";
import forecastCapture from "../assets/images/portfolio/screen-capture (1) (3).gif";
const projects = [
  {
    title: "Chat App",
    link: "https://onlinechatter.netlify.app",
    capture: chatterCapture,
    github: "https://github.com/datamosh0/chat-app",
    tech: "REACT REDUX TYPESCRIPT FIREBASE",
  },
  {
    title: "NBA Stats App",
    link: "https://nba-statistics.netlify.app/",
    capture: NBACapture,
    github: "https://github.com/datamosh0/NBA",
    tech: "REACT APIS TAILWIND BOOTSTRAP",
  },
  {
    title: "Wordle Clone",
    link: "https://wordle-jepv.onrender.com",
    capture: wordleCapture,
    github: "https://github.com/datamosh0/wordle-clone/tree/typescript",
    tech: "TYPESCRIPT CSS HTML",
  },
  {
    title: "Forecast App",
    link: "https://liveforecast.netlify.app/",
    capture: forecastCapture,
    github: "https://github.com/datamosh0/WeatherApp",
    tech: "TYPESCRIPT SASS APIS",
  },
  {
    title: "Etsy Landing Page",
    link: "https://etsy.onrender.com/",
    capture: etsyCapture,
    github: "https://github.com/datamosh0/Etsy/tree/hosting-branch",
    tech: "JAVASCRIPT SASS HTML",
  },
  {
    title: "Tezos Landing Page",
    link: "https://tezos.onrender.com/",
    capture: tezosCapture,
    github: "https://github.com/datamosh0/LandingPage/tree/hosting-branch",
    tech: "JAVASCRIPT CSS HTML",
  },
];
export default projects;
