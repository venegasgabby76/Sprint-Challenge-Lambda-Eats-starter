import React from "react";
import { Route, Link } from 'react-router-dom';
import Form from "./Form"
import "./App.css";

const App = () => {
  return (
    <section>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pizza">Pizza</Link>
      </nav>
      <Route exact path="/">
        <h1>YOU KNOW YOU WANT SOME PIZZA</h1>
      </Route>

      <Route path="/pizza" component={Form}/> 
    
      
    </section>
  );
};
export default App;
