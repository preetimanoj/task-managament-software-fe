

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


    componentDidMount() {
        const projId = "62df2476da9cfade2ebfc869";
        axios.get(`http://localhost:3001/v1/task/getAllTasksForProject/${projId}`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
            // .catch((reason) => {
            //     if (reason.response.status === 400) {
            //         // Handle 400
            //     } else {
            //         // Handle else
            //     }
            //     console.log(reason.message)
            // })
    }

    render() {

        return (
            <div>
                <h1>Hello ! Projects Name</h1>
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
                                    <TaskList name={person.name} task={person} />
                                </li>
                            )
                    }
                </ul>

            
            </div>

        );
    }
}

export default ProjectList;


