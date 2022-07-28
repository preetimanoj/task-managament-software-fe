import React, { Component } from 'react';
import TaskList from './TaskList';

class UserList extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
   
    render() { 
      
        return (  
            <div>
            <h1>Hello User</h1>
            <TaskList/>
            <TaskList/>
            <TaskList/>
            <TaskList/>
            </div>
            
        );
    }
}
 
export default UserList;