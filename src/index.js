import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import { Button, Input, Layout,Row, Col} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ListItem from './App';

const { Header, Footer, Sider, Content } = Layout;

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
      return 
    } else {
      const oldList = this.state.list;
      const newItem = {name : this.state.input, isCompleted: false};
      oldList.push(newItem);
      const newList = oldList
      this.setState({
          list: newList,
          input: ''
      });
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
    });
  }

  handleChange(e){
    this.setState({
      input: e.target.value
    })      
  }

  render(){
    return (
      <Layout  className="ToDoList" style = {{background:"white" ,color:'white'}}>
        <Header style = {{background:"white" ,color:'white' ,width:"35%", margin: "0 auto"}}>
          <Input type={"text"}  value={this.state.input} onChange={this.handleChange.bind(this)} style={{ width: '75%' }} onPressEnter={this.addItem.bind(this)} placeholder="Add task"></Input>
          <Button type="primary" shape='round' size='middle' icon={<PlusOutlined />} style={{marginLeft:15}}  onClick={this.addItem.bind(this)}>Add</Button>
        </Header>
        <Content>
        <Row justify="center">
          <Col >
          <ListItem data = {this.state.list} delete = {this.delete.bind(this)} complete = {this.complete.bind(this)}/>
          </Col>
        </Row>
        </Content>
      </Layout>
    );
  }


}
 
ReactDOM.render(
  <ToDoList />,
  document.getElementById('root')
);
