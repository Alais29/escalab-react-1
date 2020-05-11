import React from 'react'

import './custom-button.styles.scss';

// children siempre se llama asi siempre y dbe ir como primer parametro, al definirlo como primer parametro se puede definir un elemento, como button, que tendra un estilo personalizado y cualquier propiedad que sea hijo de él y esté indicado en otherprops y esté relacionado a ese componente (<button className='custom-button' {...otherProps}></button>), obtendrá tambien el estilo personalizado (las de la clase 'custom-buttom', por ejemplo)

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
  <button 
    className={`${isGoogleSignIn} ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton;