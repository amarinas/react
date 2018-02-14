export default (state = [], action) => {
  switch (action.type){
    //Check if action dispatched is
    //Create_book and act on that
    case 'CREATE_BOOK':
      return [
        ...state,
        Object.assign({}, action.book)
      ];
        
    default:
          return state;
  }
};
