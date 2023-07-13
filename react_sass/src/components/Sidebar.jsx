import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Ramon MCF" />
      <p className="title">Desenvolvedor</p>
      <p>redes sociais</p>
      <p>informações de contato</p>
      <a href="" className="btn">
        Download curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
