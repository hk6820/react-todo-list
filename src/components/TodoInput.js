import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit} = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit} >
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">

                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalization"
                        placeholder="add todo item"
                        value={item}
                        onChange={handleChange}
                        />
                    </div>
                    <button type="submit"
                     disabled={item?false:true} 
                     className="btn btn-block
                    btn-primary mt-3 text-uppercase">Add</button>
                </form>
            </div>
        )
    }
}
