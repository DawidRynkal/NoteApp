import React from 'react';
import MainTemplate from 'templates/MainTemplate'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Notes from 'views/Notes';
import Twitter from 'views/Twitter';
import Article from 'views/Article';
import DetailsPage from 'views/DetailsPage'



const Root = () => (
  <BrowserRouter>
  <MainTemplate>
      <Switch>
      <Route exact path="/" render={() => <Redirect to="/notes"/>}/>
        <Route exact path="/notes" component={Notes}/>
        <Route path="/notes/:id" component={DetailsPage}/>
        <Route exact path="/twitter/" component={Twitter}/>
        <Route path="/twitter/:id" component={DetailsPage}/>
        <Route exact path="/article/" component={Article}/>
        <Route path="/article/:id" component={DetailsPage}/>
      </Switch>
  </MainTemplate>
  </BrowserRouter>
);

export default Root;
