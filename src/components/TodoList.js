import React, { Component } from 'react';
import TodoItem from "./TodoItem"

class TodoList extends Component {
    render() {
        const { items } = this.props
        // console.log(items)
        return (
           <ul className="list-group my-5">
               <h3 className="text-capitalize text-center">todo list</h3>

                {
                    items.map(item => {
                        console.log(item.title)
                        return  <TodoItem key={item.id} tittle={item.title}/>
                    })
                }
               
               <button type="button" className="btn btn-danger my-5 btn-block">Clear Item</button>
           </ul>
        );
    }
}

export default TodoList;