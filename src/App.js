import React from 'react';
import "./components/TodoComponents/Todo.css";
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [{
        name: "",
        id: Date.now(),
        completed: false
      }]
    };
  }

  toggleItem = itemId => {
    const goal = this.state.todo.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item
    })

    this.setState( {
      todo: goal
    });
  }

  addGoal = item => {
    console.log("add item: ", item);

    const newGoal = {
        name: item,
        id: Date.now(),
        completed: true
    }

    this.setState({
      todo: [
        ...this.state.todo,
        newGoal
      ]
    });
    
  }

  clearCompleted = () => {
    console.log("clearCompleted");
    this.setState({
      todo: this.state.todo.filter(item => {
        return item.completed;
      })
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo} toggleItem={this.toggleItem} />
        <TodoForm addItem={this.addGoal} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
