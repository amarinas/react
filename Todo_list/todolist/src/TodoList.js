import React, { Component } from "react";

class TodoList extends Component {
  render(){
    return (
      <div className="todolistMain">
        <div className="header">
          <form>
            <input placeholder="enter task"></input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
