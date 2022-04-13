import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, List, Typography, Col} from 'antd';
import { CheckOutlined, CloseOutlined} from '@ant-design/icons';
import './App.css'

const { Text, Link } = Typography;
var myFlag = false;



class ListItem extends React.Component{

/**/ 
    myDelete(name){
      this.props.delete(name);
    }
    complete(name){
      this.props.complete(name);
    }
    render(){
      return (
        <List
          className='list-border'
          style={{margin:"0 auto", width : "450px"}}
          bordered
          strokeLinecap="round"
          dataSource={this.props.data}
          renderItem={element => (
            <List.Item  className="list-item" key={element.name}  style={{background: element.isCompleted === false ? 'none' : '#FFEBCD', margin: "10px"}}>                
                <Col><Text>{element.name}</Text></Col>
                <Col flex="60px">
                <Button type='default' shape='circle' size='small' icon={<CheckOutlined />}  style={{ marginRight: 8 }} onClick={this.complete.bind(this, element.name)} ></Button>
                <Button type='default' shape='circle' size='small' icon={<CloseOutlined />}  onClick={this.myDelete.bind(this, element.name)}></Button>
                </Col>
            </List.Item>
          )}
        />
     
      );
    }
}



export default ListItem