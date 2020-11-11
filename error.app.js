import React from "react";
import Carousel from "react-elastic-carousel";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import Register from "./Components/Register";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./styles.css";

export default function App() {
  const breakPoint = [{ width: 1080, itemsToShow: 1 }];

  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Carousel breakPoints={breakPoint}>
        <Card />
        <Card Number="2" />
        <Card Number="3" />
      </Carousel>
      <Route path="/register">
          <Register />
        </Route>
      <Footer />
      </Switch>
    </div>
  );
}
