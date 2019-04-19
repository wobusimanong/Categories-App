import React, { Component } from 'react';
import axios from 'axios';

import CategoryList from './CategoryList';
import Items from './Items';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {list: [], itemList: [], name: ''}
  }

  handleSelected = (name) => {
    let url = 'https://stream-restaurant-menu-svc.herokuapp.com/item?category=' + name;
    axios.get(url).then(res => this.setState({itemList: res.data, name: name}));
  }

  componentDidMount() {
    axios.get('https://stream-restaurant-menu-svc.herokuapp.com/category')
         .then(res => this.setState({list: res.data}));
  }

  render() {
    return (
      <div>
        <h1>Menu Categories</h1>
        <CategoryList list={this.state.list} handleSelected={this.handleSelected}/>
        {this.state.name ? <Items itemList={this.state.itemList} name={this.state.name}/> : null}
      </div>
      
    )
  }
}

export default App;
