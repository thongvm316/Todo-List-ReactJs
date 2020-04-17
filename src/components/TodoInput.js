import React, { Component } from 'react';

class TodoInput extends Component { 
    render() {
        // console.log(this.props)
        const { item, handleChange, handleSubmit, editItem } = this.props
        // console.log({item, handleChange, handleSubmit})
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>      
                        </div>
                        <input 
                            type="text" 
                            className="form-control text-capitalize" 
                            placeholder="add a todo item"
                            value={item}
                            onChange={handleChange}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className={
                            editItem
                            ? "btn btn-block btn-success mt-3"
                            : "btn btn-block btn-primary mt-3"
                        }
                    >
                        { editItem ? 'Edit item' : 'Add item' }
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoInput;