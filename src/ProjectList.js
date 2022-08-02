

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
        persons: []
    }


<<<<<<< HEAD
    componentDidMount() {
        axios.get(`http://localhost:3001/v1/task/getAllTasks `)
            .then(res => {
                const persons = res.data.results;
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
    }

    render() {

        return (
            <div>
                <h1>Hello ! Projects Name</h1>
                {/* <LoginPage/> */}

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
=======
  componentDidMount() {
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
            <div className='adminSection'>
                    <h1>Hello! Projects Name</h1>
                    {/* <button className='adminAddBtn'>Add Project</button> */}
                    <AddTaskModal />
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
            </ul> 
>>>>>>> a64bcb29271ed5848779c9d17efb927863ed6a28
            </div>

        );
    }
}

export default ProjectList;


