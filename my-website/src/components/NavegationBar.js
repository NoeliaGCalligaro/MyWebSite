import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Sobre mí</Link>
        </li>
        <li>
          <Link to="/mi-trabajo">Mi trabajo</Link>
        </li>
        <li>
          <Link to="/experiencia">Experiencia</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
