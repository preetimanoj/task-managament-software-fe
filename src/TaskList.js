import React, { Component } from 'react';
import ModalApp from './Modal';


const TaskList = (props) => {
    
    function showTask () {
        console.log("cliced"
        )
    } 
    return ( 
        <div className='task' >
        <p>{props.name}</p>
        <p>Status1</p>
        <p>hrs</p>
        <ModalApp task={props.task}/>
    </div>
     );
}
 

// class TaskList extends Component {
//     constructor(props) {
//         super(props);
//     }
//     state = {  }

  

//     render() { 
//         return (  
//             <div className='task' onClick={this.showTask}>
//                 <p>{this.props.name}</p>
//                 <p>Status</p>
//                 <ModalApp/>
//             </div>
//         );
//     }
// }
 
export default TaskList;