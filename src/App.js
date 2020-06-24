import React from "react";
import "./App.css";
import Movies from "./components/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import Customers from "./components/customers";
import Navbar from "./components/navbar";
import LoginForm from "./components/loginForm.jsx";
import RegisterForm from "./components/registerForm";
import MovieForm from "./components/movieForm";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route path="/movies/:id" component={MovieForm}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/login" component={LoginForm}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Route path="/register" component={RegisterForm}></Route>
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
