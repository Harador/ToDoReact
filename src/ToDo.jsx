import React from 'react';
import Header from './Header'
import Task from './Task'

export default class ToDO extends React.Component {
    state={
      tasks: [        
      ],
    }
    addTask = (text) => {
      //id: Math.random(), text: text, done: false}
      let tasks = this.state.tasks
      tasks.push({id: Math.random(), text: text, done: false})      
      this.setState({tasks: tasks})
    }
    deleteTask = (id) => {
      let newTasks = this.state.tasks.filter(t => t.id !== id)
      this.setState({tasks: newTasks})
    }
    onCheck = (id) => {
       let newTasks = this.state.tasks.map(t => t.id === id ? {...t, done: !t.done} : {...t});
       console.log(newTasks)
      this.setState({tasks: newTasks})
    }
    toEdit=(id)=> {
      let newTasks = this.state.tasks.map(t => t.id === id ? {...t, edit:!t.edit} : {...t, edit: false});
      this.setState({tasks: newTasks})
    }
    onEdit = (e) => {    
      let newTasks = this.state.tasks.map(t => t.edit === true ? {...t, text: e.target.value} : {...t});
      this.setState({tasks: newTasks})
    }
    componentDidMount(){
     if(localStorage.tasks){
       let tasks = JSON.parse(localStorage.tasks)
       this.setState({tasks: tasks})
     }    
    }
    componentDidUpdate(){
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));      
    }
    render(){
      return(
        <div className='wrap'>
            <Header onClick={this.addTask}/>
            <ul className='tasks-ul'>
              {this.state.tasks.slice()
              //.sort((a,b)=>a.done-b.done)
              .map(elem => (
              <Task key={elem.id} {...elem} onDelete={this.deleteTask}
               onCheck={this.onCheck} onEdit={this.onEdit}
               toEdit={this.toEdit}/>
              ))}              
            </ul>            
        </div>
      )  
    }
  }