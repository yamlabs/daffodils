
/*
<<<< RWG20180325 Original Code omitted

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</coxde> and save to reload.
        </p>
      </div>
    );
  }
}

exp   ort default App;
*/

// in src/App.js
import React from 'react';
import { simpleRestClient, TextField,jsonServerRestClient, Admin, Resource, fetchUtils, Delete} from 'admin-on-rest';
import { UserList } from './users';
import { ItemLocationList, ItemLocationEdit, ItemLocationCreate} from './itemLocation';
import { ItemList, ItemEdit, ItemCreate} from './item';
import { LocationList, LocationEdit, LocationCreate} from './location';
import Dashboard from './Dashboard';

import StoreIcon from 'material-ui/svg-icons/action/store';
import MallIcon from 'material-ui/svg-icons/maps/local-mall';
import PlaceIcon from 'material-ui/svg-icons/maps/place';
import TransactionIcon from 'material-ui/svg-icons/action/shopping-cart';
import testServerClient from './restClient'
import { stringify } from 'query-string';
import { fetchJson } from 'admin-on-rest';
import {TransactionList} from './Transactions';
import DashBoard from './Dashboard';
const httpClient_mod = (url, options = {}) => {
    return fetchUtils.fetchJson(url, options);
}

class AppTitleCustom extends React.Component  {
  render() {
    return (
      <div>
        <img src='./daffodils.png' height='40px' style={titleStyles} />
        <span style={titleStyles}>
          Daffodils
        </span>
      </div>
    );
  }
};
const titleStyles = {
  display:'inline-block',
  'vertical-align':'middle',
  'margin-right':'10px',
  'font-family': "'Pacifico', cursive"

}

const globalStyles={
  'font-family': "'Pacifico', cursive"
}


const App = () => (
  <Admin dashboard={DashBoard} style="globalStyles" restClient={testServerClient('http://localhost:8080', httpClient_mod)} title={<AppTitleCustom /> }>
      <Resource name="itemLocation" options= {{label:'Stocks'}} icon={StoreIcon} list={ItemLocationList} edit={ItemLocationEdit}  remove={Delete} create={ItemLocationCreate} />
      <Resource name="sold" options= {{label:'Transactions'}} icon={TransactionIcon} list={TransactionList} remove={Delete}/>
      {/* <Resource name="items" options= {{label:'Items'}} icon={MallIcon} list={ItemList} edit={ItemEdit} create={ItemCreate} /> */}
      <Resource name="location" options= {{label:'Locations'}} icon={PlaceIcon} list={LocationList} edit={LocationEdit} create={LocationCreate} />
  </Admin>
);

export default App;