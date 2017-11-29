import React, { Component } from 'react';
import BookList from '../containers/book-list'; // .. means we go up on the directory

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}
