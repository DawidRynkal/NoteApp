import React from 'react';
import MainTemplate from 'templates/MainTemplate'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Notes from 'views/Notes';
import Twitter from 'views/Twitter';
import Article from 'views/Article';
import DetailsPage from 'views/DetailsPage';
import { routes } from 'routes/index';



const Root = () => (
  <BrowserRouter>
  <MainTemplate>
      <Switch>
      <Route exact path={routes.home} render={() => <Redirect to={routes.notes}/>}/>
        <Route exact path={routes.notes} component={Notes}/>
        <Route path={routes.note} component={DetailsPage}/>
        <Route exact path={routes.twitters} component={Twitter}/>
        <Route path={routes.twitter} component={DetailsPage}/>
        <Route exact path={routes.articles} component={Article}/>
        <Route path={routes.article} component={DetailsPage}/>
      </Switch>
  </MainTemplate>
  </BrowserRouter>
);

export default Root;
