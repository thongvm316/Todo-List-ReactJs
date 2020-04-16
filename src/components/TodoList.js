import React, { Component } from 'react';
import TodoItem from "./TodoItem"

class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props
        // console.log(items)
        return (
           <ul className="list-group my-5">
               <h3 className="text-capitalize text-center">todo list</h3>

                {
                    items.map(item => {
                        return  <TodoItem 
                                    key={item.id} 
                                    tittle={item.title}
                                    handleDelete={() => handleDelete(item.id)}
                                    handleEdit={() => handleEdit(item.id)}
                                />
                    })
                }
               
               <button 
                type="button" 
                className="btn btn-danger my-5 btn-block"
                onClick={clearList}
                >
                    Clear Item
                </button>
           </ul>
        );
    }
}

export default TodoList;