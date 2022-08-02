

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
        projects: []
     }


  componentDidMount() {
    axios.get(`http://localhost:3001/v1/project/getAllProjects`)
    .then(res => {
        const projects = res.data.results;
        this.setState({ projects });
      })
  }
   
    render() { 
      
        return (  
            <div>
                <div className='adminSection'>
                    <h1>Hello Admin! Projects List</h1>
                    {/* <button className='adminAddBtn'>Add Project</button> */}
                    <AddProjectModal />
                </div>
            {/* <LoginPage/> */}
           
            <ul>
            {
          this.state.projects
            .map(project =>
                <li key={project.id}>
                    <div className='task' >
                    <p>{project.id}</p>
                    <p>{project.name}</p>
                    <p>hrs</p>
                    <button>Go to Tasks</button>
                   
                </div>
                {/* <TaskList name={project.name} task={project}/> */}
                </li>
            )
        }
            </ul> 
            </div>
            
        );
    }
}
 
export default AdminList;


