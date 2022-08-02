import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function AddProjectModal(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  const options = [
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
       
        <form className='modalcontent2'>
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
                <li>
                    <label>
                        Status:
                        <input className='modalLabel' type="text" id="username" required/>
                    </label>
                </li>
                <li>
                    <label>
                        Date Created:
                        <input className='modalLabel' type="text" id="username" required/>
                    </label>
                </li>
            </ul>

        </form>
       
      </Modal>
    </div>
  );
}

export default AddProjectModal;

