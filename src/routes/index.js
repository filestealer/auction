import React from 'react';
import { Route, Switch } from 'react-router';
// import {Link} from "react-router-dom";
import lots from '../modules/lots/index';
import app from '../modules/app/index';

export const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={app.scenes.Index} />
      <Route path="/lots/" component={lots.scenes.List} />
      <Route path="/lot/:id/" component={lots.scenes.Item} />
      <Route path="/auction_reg" component={lots.scenes.Auction_reg} />
      {/* <Route component={NoMatch} /> */}
    </Switch>
  </div>
);
