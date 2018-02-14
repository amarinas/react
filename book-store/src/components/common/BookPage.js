import React from 'react';

class Book extends React.Component{
    constructor(props){
      // Pass the props bact to parent

      super(props);
    }

    //Submit book handler
    submitBook(input){
      alert('Submitted')
    }

    render(){
      //Title input tracker
      let titleInput;

      //return jsx
      return(
        <div>
          <h3>Books</h3>
          <ul>
          {/* Traverse books array */}
          {this.props.books.map((b,i) => <li key={i}>{b.title}</li> )}
          </ul>
          <div>
            <h3> Books Form </h3>
            <form onSubmit={e => {
              // prevent request
              e.preventDefault();

              //Assemble input
              var input = {title: titleInput.value};

              //call handler
              this.submitBook(input);

              //reset Form
              e.target.reset();

            }}>
              <input type="text" name="title" ref={noe => titleInput = node}/>
              <input type="submit" />
            </form>
          </div>
        </div>
      )
    }

}


export default Book;
