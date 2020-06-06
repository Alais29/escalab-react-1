import React from 'react';
import {withRouter} from 'react-router-dom';

//estilos
import './menu-item.styles.scss';

//dentro de los parametros se pasan todas las propiedades que se recibiran en este componente. history y match son de withrouter
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

//withRouter permite trabajar con history y match. En este caso el menuitem es un hijo (de menu), como es un componente de jerarquia inferior y no tiene una ruta esablecida (con switch, en el app.js), con withrouter se puede "viajar" a un componente de jerarquia superior. History (un objeto) con push, toma la ruta actual de navegación con match y en este caso le suma el enlace del item actual con linkUrl
export default withRouter(MenuItem);
