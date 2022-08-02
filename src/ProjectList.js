

import React, { Component } from 'react';
import TaskList from './TaskList';
import axios from 'axios';
import LoginPage from './Login';


class ProjectList extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        persons: []
    }


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
            </div>

        );
    }
}

export default ProjectList;


