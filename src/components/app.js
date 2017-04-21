import React, { Component } from 'react';
import SearchNavi from '../containers/search_navi';
import TenkiList from '../containers/tenki_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchNavi />
        <TenkiList />
      </div>
    );
  }
}
