import React, { Component } from 'react';
import ReactDOM form 'react-dom';

export default class extends Component{
renderList(){
  return this.props.books.map((book)=>{
    return(
      <li key = {book.title} className = "list-group-item">{book.title}</li>
    );
  });
}

  render(){
    return {
      <ul className = "list-group col-sm-4">
          {this.renderList()} //call function
      </ul>
    }
  }
}
