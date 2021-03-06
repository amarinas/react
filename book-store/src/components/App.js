import React from 'react';
// import {Link} from 'react-router';

const App = (props) => {
  return (
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Scotch Books</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul> className="nav navbar-nav">
              <li><a href="/">Home</a></li>
              <li><a href="about">About</a></li>
              <li><a href="books">Books</a></li>
              <li><a href="cart">Cart</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Each smaller components*/}
      {this.props.children}
    </div>

  );
};

export default App;
