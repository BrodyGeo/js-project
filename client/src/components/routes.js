import React from "react";
import { Route, Switch } from "react-router-dom";

import BeerIndex from "./beers/index";
import BeerShow from "./beers/show";
import BeerNew from "./beers/new";
import BeerEdit from "./beers/edit";
import BeerDestroy from "./beers/destroy";

import VendorIndex from "./vendors/index";
import VendorNew from "./vendors/new";
import VendorEdit from "./vendors/edit";
import VendorDestroy from "./vendors/destroy";

function Routes() {
  return (
    <Switch>
      <Route exact path="/beer/" component={BeerIndex} />
      <Route exact path="/beer/new" component={BeerNew} />
      <Route exact path="/beer/:id" component={BeerShow} />
      <Route exact path="/beer/:id/edit" component={BeerEdit} />
      <Route exact path="/beer/:id/destroy" component={BeerDestroy} />

      <Route exact path="/vendor/" component={VendorIndex} />
      <Route exact path="/vendor/new" component={VendorNew} />
      <Route exact path="/vendor/:id/edit" component={VendorEdit} />
      <Route exact path="/vendor/:id/destroy" component={VendorDestroy} />
    </Switch>
  );
}

export default Routes;