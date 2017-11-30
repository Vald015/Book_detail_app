import React, { Component } from 'react';

import BookList from '../containers/book-list'; // .. means we go up on the directory
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
