import Home from "../../pages/home";
import About from "../../pages/about";

const pages = [
  {
    path: "/",
    component: Home,
    protected: false,
  },
  {
    path: "/about",
    component: About,
    protected: false,
  },
];

export default pages;
