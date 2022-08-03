import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import axios from 'axios';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function AddUserModal(props) {
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
    console.log(event.target.elements.name.value)
    console.log(event.target.elements.role.value)
    console.log(event.target.elements.email.value)
    let abc = "12";
        const options = {
          method: 'POST',
          url: 'http://localhost:3001/v1/users/createUser',
          data: {
              id: parseInt(abc),
              name: event.target.elements.name.value,
              role: event.target.elements.role.value,
              isEmailVerified: false,
              email: event.target.elements.email.value,
            password: "Lambton123"
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
      <button className='adminAddBtn' onClick={openModal}>Add New User</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="popmodal"
        contentLabel="Example Modal"
      >
        <div className='modalhead'>
        <h2>Add New User</h2>
        <button onClick={closeModal}>X</button>
        </div>
       
        <form className='modalcontent2' onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label>
                        Name: 
                        <input className='modalLabel' type="text" id="name" required/>
                    </label>
                </li>
                <li>
                    <label>
                        Email:
                        <input className='modalLabel' type="text" id="email" required/>
                    </label>
                </li>
                <li>
                    <label>
                        Role:
                        <input className='modalLabel' type="text" id="role" required/>
                    </label>
                </li>
               
            </ul>
            <input type="submit" value="Add" />
        </form>
       
      </Modal>
    </div>
  );
}

export default AddUserModal;

