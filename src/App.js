import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

// Importar las paginas
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

//Importar firebase
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
// import { render } from 'node-sass';

//actualmente se trabaja mas con functional components porque son mas limpios y tienen un mejor manejo del state

//Switch se encarga de manejar las rutas para mostrar cada pagina y con router se carga cada pagina. Detecta cada configuración de ruta a medida que se vaya cargando. Con switch se va cargando cada ruta

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  
  unsubscribeFromAuth = null;

  //metodo para la carga del componente la primera vez
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      this.setState({currentUser:userAuth});
    });
  }

  //Metodo para desmontar el componente
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return(
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
    </div>  
    )
  }
}

export default App;
