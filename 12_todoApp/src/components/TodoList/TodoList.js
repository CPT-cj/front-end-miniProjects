import React, { Component } from "react";
import Header from "./Header";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      todoTitle: "",
      status: "all",
    };
  }

  titleHandler(event) {
    this.setState({
      todoTitle: event.target.value,
    });
  }

  addTodo(event) {
    event.preventDefault();

    let newtodo = {
      id: this.state.todos.length + 1,
      title: this.state.todoTitle,
      completed: false,
    };

    newtodo.title.length &&
      this.setState((prevState) => {
        return {
          todos: [...prevState.todos, newtodo],
          todoTitle: "",
        };
      });
  }

  removeTodo(id) {
    let newTodos = this.state.todos.filter((todo) => todo.id !== id);

    this.setState({
      todos: newTodos,
    });
  }

  editTodo(id) {
    let newTodos = [...this.state.todos];

    newTodos.forEach((todo) => {
      if (todo.id == id) {
        todo.completed = !todo.completed;
      }
    });

    this.setState({
      todos: newTodos,
    });
  }

  statusHandler(event) {
    this.setState({ status: event.target.value });
  }

  render() {
    return (
      <>
        <Header />
        <form>
          <input
            type="text"
            className="todo-input"
            maxLength="40"
            value={this.state.todoTitle}
            onChange={this.titleHandler.bind(this)}
          />
          <button
            className="todo-button"
            type="submit"
            onClick={this.addTodo.bind(this)}
          >
            <i className="fas fa-plus-square"></i>
          </button>
          <div className="select">
            <select
              name="todos"
              className="filter-todo"
              onChange={this.statusHandler.bind(this)}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>

        <div className="todo-container">
          <ul className="todo-list">
            {this.state.status == "all" &&
              this.state.todos.map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  onRemove={this.removeTodo.bind(this)}
                  onEdit={this.editTodo.bind(this)}
                />
              ))}

            {this.state.status == "completed" &&
              this.state.todos
                .filter((todo) => todo.completed == true)
                .map((todo) => (
                  <Todo
                    key={todo.id}
                    {...todo}
                    onRemove={this.removeTodo.bind(this)}
                    onEdit={this.editTodo.bind(this)}
                  />
                ))}

            {this.state.status == "uncompleted" &&
              this.state.todos
                .filter((todo) => todo.completed == false)
                .map((todo) => (
                  <Todo
                    key={todo.id}
                    {...todo}
                    onRemove={this.removeTodo.bind(this)}
                    onEdit={this.editTodo.bind(this)}
                  />
                ))}
          </ul>
        </div>
      </>
    );
  }
}
