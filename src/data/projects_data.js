import tezosCapture from "../assets/images/portfolio/screen-capture (4) (1).gif";
import NBACapture from "../assets/images/portfolio/screen-capture (2) (1).gif";
import etsyCapture from "../assets/images/portfolio/screen-capture (3) (1).gif";
import wordleCapture from "../assets/images/portfolio/screen-capture (6) (1).gif";
import chatterCapture from "../assets/images/portfolio/screen-capture (5).gif";
import forecastCapture from "../assets/images/portfolio/screen-capture (1) (1).gif";
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
    title: "Tezos Landing Page",
    link: "https://tezos.onrender.com/",
    capture: tezosCapture,
    github: "https://github.com/datamosh0/LandingPage/tree/hosting-branch",
    tech: "JAVASCRIPT CSS HTML",
  },
  {
    title: "Etsy Landing Page",
    link: "https://etsy.onrender.com/",
    capture: etsyCapture,
    github: "https://github.com/datamosh0/Etsy/tree/hosting-branch",
    tech: " JAVASCRIPT SASS HTML",
  },
  {
    title: "Forecast App",
    link: "https://liveforecast.netlify.app/",
    capture: forecastCapture,
    github: "https://github.com/datamosh0/WeatherApp",
    tech: "APIS JAVASCRIPT SASS",
  },
];
export default projects;
