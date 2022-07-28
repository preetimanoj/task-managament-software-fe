import React, { Component } from 'react';
import ModalApp from './Modal';


class TaskList extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }

    showTask = () =>{
        console.log("cliced")
    } 

    render() { 
        return (  
            <div className='task' onClick={this.showTask}>
                <p>Task Name</p>
                <p>Status</p>
                <ModalApp/>
            </div>
        );
    }
}
 
export default TaskList;