import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductListPage from "../components/ProductListPage/ProductListPage"
import ProductDetailsPage from "../components/ProductDetailsPage/ProductDetailsPage"
import HomePage from "../components/HomePage/HomePage"
import My404Component from "../components/404Component/404Component"

const RouteSchema = (props) => {
    return (
      <div className="flx jc-center">
        <Switch>
          <Route exact path="/products" component={ ProductListPage } />
          <Route exact path="/" component={ HomePage } />
          <Route path="/products/:productId" component={ ProductDetailsPage } />
          <Route
            path="*"
            exact={true}
            render={() => <My404Component toggleHeaderAndFooterVisibility={props.toggleHeaderAndFooterVisibility } />}
          />
        </Switch>
      </div>
    );
}

export default RouteSchema;
