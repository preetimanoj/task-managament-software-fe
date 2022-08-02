import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import axios from 'axios';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function AddProjectModal(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);



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
    console.log(event.target.elements.proName.value)
    console.log(event.target.elements.description.value)
    console.log(event.target.elements.hours.value)
    let abc = "12";
        const options = {
          method: 'POST',
          url: 'http://localhost:3001/v1/project/createProject',
          data: {
              id: parseInt(abc),
              name: event.target.elements.proName.value,
              // password: this.state.password
          },
      };

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
      <button className='adminAddBtn' onClick={openModal}>Add New Project</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="popmodal"
        contentLabel="Example Modal"
      >
        <div className='modalhead'>
        <h2>Add New Project</h2>
        <button onClick={closeModal}>X</button>
        </div>
       
        <form className='modalcontent2' onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label>
                        Project Name: 
                        <input className='modalLabel' type="text" id="proName" required/>
                    </label>
                </li>
                <li>
                    <label>
                        Description
                        <input className='modalLabel' type="text" id="description" required/>
                    </label>
                </li>
                <li>
                    <label>
                        Hours: 
                        <input className='modalLabel' type="number" id="hours" required/>
                    </label>
                </li>
            </ul>
            <button type='submit'>submit</button>
        </form>
       
      </Modal>
    </div>
  );
}

export default AddProjectModal;

