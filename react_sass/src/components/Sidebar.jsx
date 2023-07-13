import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Ramon MCF" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="" className="btn">
        Download curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
