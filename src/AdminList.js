

import React, { Component } from 'react';
import TaskList from './TaskList';
import axios from 'axios';
import LoginPage from './Login';
import AddProjectModal from './AddProjectModal';

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AddUserModal from './AddUserModal';




class AdminList extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        projects: [],
        users: []
    }


    componentDidMount() {

        axios.get(`http://localhost:3001/v1/project/getAllProjects`)
            .then(res => {
                const projects = res.data.results;
                this.setState({ projects });
            });

            axios.get(`http://localhost:3001/v1/users/getAllUsers`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })

            console.log(this.state.projects, "project")
            console.log("userzd", this.state.users)
    }

    render() {

        return (
            <div>
                <div className='adminSection'>
                    <h1>Hello Admin! Projects List</h1>
                    {/* <button className='adminAddBtn'>Add Project</button> */}
                   
                    <AddProjectModal />
                    <AddUserModal/>
                </div>
                {/* <LoginPage/> */}
                <div className='adminContent'>
                <ul>
                    {this.state.projects?
                        this.state.projects
                            .map(project =>
                                <li key={project.id}>
                                    <div className='task' >
                                        {/* <p>{project.id}</p> */}
                                        <p>{project.name} </p>
                                        <button>
                                            <Link to={`/projectList/${project.id}`}>View Project</Link>
                                        </button>

                                    </div>
                                </li>
                            ) : ""
                    }
                </ul>
                <ul>
                    {this.state.users?
                        this.state.users
                            .map(user =>
                                <li key={user.id}>
                                    <div className='task' >
                                        {/* <p>{project.id}</p> */}
                                        <p>{user.name} </p>
                                        
                                        <p>{user.email} </p>
                                        <p>{user.isEmailVerified? "Verified" : "Pending"} </p>

                                    </div>
                                </li>
                            ) :""
                    }
                </ul>
                </div>
                
            </div>

        );
    }
}

export default AdminList;


