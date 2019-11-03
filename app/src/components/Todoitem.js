import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    }
    
  }
  
  render() {
    const { id, title } = this.props.todo;
    
    return (
      <div style={this.getStyle()}>
        <div className="row">
          <div className="col text-left"><input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
          {title}</div>
          <div className="col text-right"><button className="btn btn-danger" onClick={this.props.delTodo.bind(this, id)}>Delete</button></div>
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}



export default TodoItem;
