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
    // console.log(value)
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
    // console.log(newItem)
    const updateItems = [...this.state.items, newItem]
    // console.log(updateItems)
    this.setState({
      items: updateItems,
      item: '',
      id: uuidv1(),
      editItem: false
    })
  }

  render() {
    // console.log(this.state.items)
    return (
      <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">Todo Input</h3>
          <TodoInput 
            item={this.state.item} 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <TodoList
            items={this.state.items}
          />
        </div>
      </div>
    </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-10 mx-auto col-md-8 mt-4">
//           <h3 className="text-capitalize text-center">Todo Input</h3>
//           <TodoInput/>
//           <TodoList/>
//         </div>
//       </div>
//     </div>
//   );
// }
