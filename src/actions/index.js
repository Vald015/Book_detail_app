export function selectBook(book){
  //console.log('A book has been selected:', book.title);
  //selectBookis an ActionCreator, it needs to return an action.
  //An object with an type property.
  //type always on caps
  //payload more info about the action taken
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
