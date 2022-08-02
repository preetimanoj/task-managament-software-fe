

import React, { Component } from 'react';
import TaskList from './TaskList';
import axios from 'axios';
import LoginPage from './Login';
import AddProjectModal from './AddProjectModal';


class AdminList extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        persons: []
     }


  componentDidMount() {
    axios.get(`http://localhost:3001/v1/project/getAllProjects`)
    .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
      })
  }
   
    render() { 
      
        return (  
            <div>
                <div className='adminSection'>
                    <h1>Hello ! Projects List</h1>
                    {/* <button className='adminAddBtn'>Add Project</button> */}
                    <AddProjectModal />
                </div>
            {/* <LoginPage/> */}
           
            <ul>
            {
          this.state.persons
            .map(person =>
                <li key={person.id}>
                <TaskList name={person.name} task={person}/>
                </li>
            )
        }
            </ul> 
            </div>
            
        );
    }
}
 
export default AdminList;


