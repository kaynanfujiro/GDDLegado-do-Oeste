import { Link } from 'react-router-dom';
import './css/menu.css'

export const Menu = () => {
  return (
    <div className="left-page">
      <ul className="menu_ul">
        <li className="item-menu">
          <div className="circle-container">
            <div className="circle">
              <span className="hover-text">
                <Link className="btnMenu" to="/sobre">Sobre</Link>
              </span>
            </div>
          </div>
        </li>
        <li className="item-menu">
          <div className="circle-container">
            <div className="circle">
              <span className="hover-text">
                <Link className="btnMenu" to="/personagens">Personagens</Link>
              </span>
            </div>
          </div>
        </li>
        <li className="item-menu">
          <div className="circle-container">
            <div className="circle">
              <span className="hover-text">
                <Link className="btnMenu" to="/historia">História</Link>
              </span>
            </div>
          </div>
        </li>
        <li className="item-menu">
          <div className="circle-container">
            <div className="circle">
              <span className="hover-text">
                <Link className="btnMenu" to="/gameplay">Gameplay</Link>
              </span>
            </div>
          </div>
        </li>
        <li className="item-menu">
          <div className="circle-container">
            <div className="circle">
              <span className="hover-text">
                <Link className="btnMenu" to="/mecanica">Mecânica</Link>
              </span>
            </div>
          </div>
        </li>
        <li className="item-menu">
          <div className="circle-container">
            <div className="circle">
              <span className="hover-text">
                <Link className="btnMenu" to="/devs">Desenvolvedores</Link>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
