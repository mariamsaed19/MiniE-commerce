import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Carousal from "./Components/Carousal";
import Header from "./Components/Header";
import FurnitureList from "./Components/furniture/FurnitureList";
import InfoPage from "./Components/furniture/ProductPage/InfoPage";
import  { FurnitureProvider } from "./context/furniture-context";
import TopProducts from "./Components/TopProducts";
function App() {

  return (
    <FurnitureProvider>
    <Router>
      <Header />
      <Switch>
        <Route path="/product" >
          <InfoPage/>
        </Route>
        <Route path="/">
          <Carousal > 
            <TopProducts/>   
          </Carousal>
          <FurnitureList/>
        </Route>
      </Switch>
    </Router>
    </FurnitureProvider>
  );
}

export default App;
