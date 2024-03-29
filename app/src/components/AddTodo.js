import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  state = {
    title: ''
  }
  
  onChange = (e) => this.setState({ [e.target.name]: e.target.value});
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title)
    this.setState({ title: ''})
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="col btn-group mt-4">
        <input type="text"
               name="title"
               placeholder="add todo..."
               className="form-control"
               value={this.state.title}
               onChange={this.onChange}/>
        <input type="submit"
               value="Submit"
               className="btn btn-secondary"/>
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo;
