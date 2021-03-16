import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.components";
import Header from "./components/header/header.componente";



function App() {
  return (
      <div>
          <Header />
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
          </Switch>
      </div>
  );
}

export default App;
