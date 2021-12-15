import React, { Component } from 'react';

import './style.scss';

export class TodoList extends Component {
  render() {
    return (
      <div className="todo-list">
        <header className="input-container">
          <h1>Minhas Tasks</h1>
          <div className="inputs">
            <input type="text" placeholder="Adicionar nova tarefa" />
            <button>
              <i class="far fa-check-square"></i>
            </button>
          </div>
        </header>
        <ul className="list">
          <li>
            <div className="isCompleted" data-task="task">
              <input type="checkbox" />
              <p>placeholder task</p>
            </div>
            <button>
              <i class="far fa-trash-alt"></i>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
