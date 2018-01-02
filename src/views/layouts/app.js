import React from "react";
import { Link, Route } from "react-router-dom";
import routes from "../../routes";
import Navbar from '../components/Navbar';
import SideDrawer from "../components/SideDrawer";
// import Styles from "./css";

const App = ( ) => (
  <div>
    <Navbar/>
    <SideDrawer/>
    <header>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/myaccount">My Account</Link>
    </header>

    { routes.map( route => (
      <Route key={ route.path } { ...route } />
    ) ) }

    <footer>
      I`m the footer, I am on every page.
    </footer>
    {/*<Styles />*/}
  </div>
);
export default App;