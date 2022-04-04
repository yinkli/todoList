import React, { Component } from 'react'
import './App.css'


var myFlag = false;



class ListItem extends React.Component{
  myDelete(name){
    this.props.delete(name);
  }
  complete(name){
    this.props.complete(name);
  }
  render(){
    return (
      <ul>
      {
        this.props.data.map(element => {
          return (
            <div>
            <li className="listItem" key={element.name}  style={{background: element.isCompleted === false ? 'none' : '#FFEBCD'}}>
              
              <span>{element.name}</span>
              <button className='complete' onClick={this.complete.bind(this, element.name)}>v</button>
              <button className="delete"   onClick={this.myDelete.bind(this, element.name)}>x</button>
              
            </li>
            <li className="fengexian">&nbsp;</li>
            </div>
            )
      })
    }
    </ul>       
    );
  }
}

export default ListItem