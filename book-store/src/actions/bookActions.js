export const createBook = (book) => {
  //return action
  return {
    //unique indentifier
    type: 'CREATE_BOOK',
    //payload
    book: book
  }
};
