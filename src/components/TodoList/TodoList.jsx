import React, { Component } from 'react';


import './style.scss';

 class TodoList extends Component {
constructor() {
  super();
  this.state ={
    inputValue: '',
    myTask: [],
    id: 0,
    checkedInput: [],
  }
  this.cheangeTask = this.cheangeTask.bind(this)
  this.clickTask = this.clickTask.bind(this)
  this.checkbox = this.checkbox.bind(this)
}

cheangeTask(event) {
  this.setState({
   inputValue:event.target.value 
  })
}

clickTask() {
  const { id, inputValue, checkedInput} = this.state;
this.setState((state)=>({
  id: state.id + 1,
  myTask: [ ...state.myTask, { inputValue, id, checkedInput }  ],
  inputValue: '',


}))

}

checkbox({ target:{ checked }  }, id) {
  if(checked) {
  this.setState(   prevState=> ({
    checkedInput: [...prevState.checkedInput, id, console.log(prevState)  ]
  }))
  } else {
    this.setState(prevState => ({
      checkedInput: prevState.checkedInput.filter((checked) => checked !== id ),
      checkedInput: []
    }))

  }
}

deletetasks = (id) => {
  const { myTask, } = this.state;
 const newTask = myTask.filter((delet) => delet.id  !== id);
 this.setState({
   myTask: newTask,
 })

}

  render() {
    const {  myTask, inputValue, checkedInput } = this.state
    return (
      <div className="todo-list">
        <header className="input-container">
          <h1>Minhas Tasks</h1>
          <div className="inputs">
            <input 
            name="inputValue" 
            onChange={this.cheangeTask}
             type="text" 
             placeholder="Adicionar nova tarefa" 
             value={ inputValue }
             />
             
            <button onClick={this.clickTask} >
              <i className="far fa-check-square"></i>
            </button>
          </div>
        </header>
        <ul className="list"> {myTask.map((task) => (
          <li key={ task.id } id={ task.id } > {task.inputValue}
          <div name={ task.id }  className={ checkedInput.includes(task.id) ? 'isCompleted' : ''} data-task="task">
            <input  onClick={ (event) => this.checkbox(event,task.id) }  type="checkbox" />
            <p>placeholder task</p>
          </div>
          <button  type="button" onClick={ () => this.deletetasks(task.id) }>
            <i className="far fa-trash-alt"></i>
          
          </button>
        </li>
        ))}
          
        </ul>
      </div>
    );
  }
}

export default TodoList;