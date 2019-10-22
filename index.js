import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: "1", details: "Task 1", completed: false },
        { id: "2", details: "Task 2", completed: false },
        { id: "3", details: "Task 3", completed: true },
        { id: "4", details: "Task 4", completed: false },
        { id: "5", details: "Task 5", completed: true },
        { id: "6", details: "Task 6", completed: false },
        { id: "7", details: "Task 7", completed: true },
        { id: "8", details: "Task 8", completed: true },
        { id: "9", details: "Task 9", completed: true },
        { id: "10", details: "Task 10", completed: true }
      ],
      itemsToShow: 5,
      expanded: false
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.state.itemsToShow === 5
      ? this.setState({ itemsToShow: this.state.tasks.length, expanded: true })
      : this.setState({ itemsToShow: 5, expanded: false });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.tasks.slice(0, this.state.itemsToShow).map((task, i) => (
            <li key={i}>
              <input type="checkbox" defaultChecked={task.completed} />
              {task.details}
            </li>
          ))}
        </ul>

        <button onClick={this.showMore}>
          {this.state.expanded ? (
            <span>Show less</span>
          ) : (
            <span>Show more</span>
          )}
        </button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
