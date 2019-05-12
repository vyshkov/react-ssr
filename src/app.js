import React from 'react';

import { Switch, Route } from 'react-router';

import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url(http://www.sccpre.cat/png/big/119/1196458_blue-space-png.png);
    background-attachment: fixed;
    text-align: center;

    &::-webkit-scrollbar {
      width: 5px;
    }
    
    &::-webkit-scrollbar-track {
      background: #ddd;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #777; 
    }
  }

`

const App = () => [
    <GlobalStyle key="global-style"/>,
    <Switch key="router"> 
        <Route exact path="/" render={
            props => <HomePage { ...props} />
        } />
        <Route path="/details/:name" render={
            props => <DetailsPage />
        } />
    </Switch>
];

export default App;
