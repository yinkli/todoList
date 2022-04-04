import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListItem from './App';

var myFlag = true;
var myDebug = false;


class ToDoList extends React.Component {
  constructor(){
    super();
    this.state = {
      list : [
        {name : 'Task 1', isCompleted : true },
        {name : 'Task 2', isCompleted : true },
        {name : 'Task 3', isCompleted : false},
        {name : 'Task 4', isCompleted : false},
        {name : 'Task 5', isCompleted : false}
      ],
      input : ''
    }
  }

  addItem(){
    if(this.state.input === ''){
      if(myDebug) alert(this.state.list.length);
      return 
    } else {
      if(myDebug) alert('come in else');
      const oldList = this.state.list;
      if(myDebug) alert("oldList succeed");
      const newItem = {name : this.state.input, isCompleted: false};
      if(myDebug) alert("newList succeed");
      oldList.push(newItem);
      const newList = oldList
      if(myDebug) alert("push succeed");
      this.setState({
          list: newList,
          input: ''
      });
      if(myDebug) alert(newList);
      if(myDebug) alert(this.state.list.length);
    }
  }

  delete(name){
    const oldList = this.state.list;
    const newList = oldList.filter(
      (value)=>{
        if(value.name !== name){
          return true;
        } else {
          return false;
        }
      }
    );
    this.setState({
      list: newList,
//        input: ''
    });
  }

  complete(name){
    const oldList = this.state.list;
    const newList = oldList.map(
      (value)=>{
        if(value.name !== name){
          return value;
        } else {
          const oldValue = value;
          const newValue = oldValue;
          newValue.isCompleted === false ? newValue.isCompleted = true : newValue.isCompleted = false;
          return newValue
        }
      }
    )
    this.setState({
      list: newList,
//        input: ''
    });
  }

  handleChange(e){
    this.setState({
      input: e.target.value
    })      
  }

  render(){
    return (
      <div className="ToDoList">
        <header>
          <input type={"text"} value={this.state.input} onChange={this.handleChange.bind(this)} placeholder="Add task"></input>
          <button className = "add item" onClick={this.addItem.bind(this)}>Add</button>
        </header>
        <footer>
          <ListItem data = {this.state.list} delete = {this.delete.bind(this)} complete = {this.complete.bind(this)}/>
        </footer>
      </div>
    );
  }


}


ReactDOM.render(
  <ToDoList />,
  document.getElementById('root')
);
