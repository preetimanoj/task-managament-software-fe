import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import axios from 'axios';


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function ModalApp(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  const options = [

    { label: 'Created', value: 'Created' },
    { label: 'Pending', value: 'Pending' },
    { label: 'In Progress', value: 'Progress' },
    { label: 'Finished', value: 'Finished' },
  ];

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  function openModal() {
    console.log(props.task);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event)
 
    let abc = "12";
   
      const options = {
          method: 'POST',
          url: 'http://localhost:3001/v1/task/updateTask/62df252ada9cfade2ebfc86b',
          data: {
            id: props.task.name,
            name: props.task.name,
            description: props.task.description,
            startDate: props.task.startDate,
            endDate:props.task.endDate,
            status: event.target.elements.status.value,
            hours: 3,
            projectId: "62df2476da9cfade2ebfc869",
          },
      };
      console.log("op",options.data)
      // send the request
      axios(options)
          .then(res => {
              this.setState({ loginStatus: true });
              console.log("Login Successful")
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

  return (
    <div>
      <button onClick={openModal}>View Task</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="popmodal"
        contentLabel="Example Modal"
      >
        <div className='modalhead'>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Task Name: {props.task.name}</h2>
        <button onClick={closeModal}>X</button>
        </div>
       
        <div className='modalcontent'>
            <p>
            {props.task.description}
            </p>
            <div>
              <form onSubmit={handleSubmit}>
                  <label>
                  Status : 
                  <select className='dropdown' value={props.task.status} id="status" onChange={handleChange}>
                    {options.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </label>
                <label>Hours:
                  <input className='modalLabel2' type="number" id="hours" required/>
                </label>
                <button type='submit'>submit</button>
              </form>
           
            </div>

        </div>
       
      </Modal>
    </div>
  );
}

export default ModalApp;
