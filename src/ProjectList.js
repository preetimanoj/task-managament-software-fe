

import React, { Component } from 'react';
import TaskList from './TaskList';
import axios from 'axios';
import LoginPage from './Login';
import AddTaskModal from './AddTaskModal';



// get id from url and pass it to axios get

class ProjectList extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    state = {
        persons: [],
        users: [],
        projectName: String,
    }


    componentDidMount() {
        const projId = "62df2476da9cfade2ebfc869";
        axios.get(`http://localhost:3001/v1/task/getAllTasksForProject/${projId}`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
            .catch((reason) => {
                if (reason.response.status === 400) {
                    // Handle 400
                } else {
                    // Handle else
                }
                console.log(reason.message)
            })
        axios.get(`http://localhost:3001/v1/users/getAllUsers`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
        axios.get(`http://localhost:3001/v1/project/getAllProjects`)
            .then(res => {
                const projects = res.data;
                this.setState({ projectName: projects.results[0].name })
                console.log(projects.results[0].name);
            })

    }

    render() {

        let status = "Completed"
        let TotalHours = 0
        let Completed = 0
        let TotalCost = 0;


        this.state.persons.forEach((item) => {
            if (item.status != "Completed" && status != "In-Progress") {
                status = "In-Progress"
            }
            if (!isNaN(item.hours))
                TotalHours += item.hours
        });

        return (
            <div>
                {/* <h1>Hello ! Projects Name</h1>
                {/* <LoginPage/> */}
                {/* <AddTaskModal /> } */}
                <div className='adminSection'>
                    <h1>{this.state.projectName}</h1>
                    <br />
                    <h1>List of Tasks:</h1>
                    <br />
                    <b>Project Status: {status}</b>
                    <br />
                    <b>Total Prject Time: {TotalHours} hrs</b>
                    <AddTaskModal users={this.state.users} />
                </div>

                <ul>
                    {
                        this.state.persons
                            .map(person =>
                                <li key={person.id}>
                                    <TaskList name={person.name} task={person} />
                                </li>
                            )
                    }
                </ul>
                {/* componentDidMount() {
    // let params = useParams();
    // const projId = this.props.match.params.projId;

    const projId = "62df2476da9cfade2ebfc869";
    axios.get(`http://localhost:3001/v1/task/getAllTasksForProject/${projId}`)
    .then(res => {
        const persons = res.data;
       
        this.setState({ persons });
      })
  }
   
    render() { 
      
        return (  
            <div>
            <h1>Tasks of Projects Name -- 2</h1>
            {/* <LoginPage/> */}
                {/* <div className='adminSection'>
                    <h1>Hello! Projects Name</h1> */}
                {/* <button className='adminAddBtn'>Add Project</button> */}
                {/* <AddTaskModal />
                </div>
           
            <ul>
            {
          this.state.persons
            .map(person =>
                <li key={person.id}>
                <TaskList name={person.name} task={person}/>
                </li>
            )
        }
            </ul> } */}
            // </div>

        );
    }
}

export default ProjectList;


