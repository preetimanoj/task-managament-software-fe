

import React, { Component } from 'react';
import TaskList from './TaskList';
import axios from 'axios';
import LoginPage from './Login';



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
 
export default ProjectList;


