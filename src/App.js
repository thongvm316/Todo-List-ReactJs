import React from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v1 as uuidv1 } from 'uuid';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      id: uuidv1(),
      item:'',
      editItem: false
    }
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      item: value
    })
  } // use giai phap optimize da hoc --> tommorow

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updateItems = [...this.state.items, newItem]
    this.setState({
      items: updateItems,
      item: '',
      id: uuidv1(),
      editItem: false
    })
  }

  clearList = () => {
    this.setState({
      items: []
    })
  }

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filteredItems
    })
  }

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id) // ?
    const selectItem = this.state.items.find(item => item.id === id)
    console.log(filteredItems);
    console.log(selectItem);
    this.setState({
      items: filteredItems,
      item: selectItem.title, // ?
      editItem: true,
      id: id
    })  
  }

  render() {
    // console.log(this.state);
    return (
      <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">Todo Input</h3>
          <TodoInput 
            item={this.state.item} 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
          />
          <TodoList
            items={this.state.items} 
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
