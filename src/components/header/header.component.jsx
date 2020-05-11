import React from 'react';
import {Link} from 'react-router-dom';

//import firebase auth
import {auth} from '../../firebase/firebase.utils';

//se define el logo como un componente para asi 'inyectarlo' y poder darle el tratamiento de un componente, como agregarle className o cualquier otra propiedad
import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({currentUser}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACTO
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )

      }
    </div>
  </div>
);

export default Header;
