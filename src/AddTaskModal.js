import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import axios from 'axios';



// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function AddTaskModal(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    // console.log(props.task);
    console.log("*****")
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function onSubmit(){

  }

  return (
    <div>
      <button className='adminAddBtn' onClick={openModal}>Add Task</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="popmodal"
        contentLabel="Example Modal"
      >
        <div className='modalhead'>
        <h2>Add New Task</h2>
        <button onClick={closeModal}>X</button>
        </div>
       
        <form className='modalcontent2'>
            <ul>
                <li>
                    <label>
                        Task Name: 
                        <input className='modalLabel' type="text" id="proName" required/>
                    </label>
                </li>
                <li>
                    <label>
                        Description: 
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
                        <input className='modalLabel' type="text" id="status" value="Created" required/>
                    </label>
                </li>
                <li>
                    <label>
                        Start Date:
                        <input className='modalLabel' type="text" id="startDate" required placeholder='dd/mm/yyyy'/>
                    </label>
                </li>
                <li>
                    <label>
                        End Date:
                        <input className='modalLabel' type="text" id="endDate" required  placeholder='dd/mm/yyyy'/>
                    </label>
                </li>
                <li>
                    <label>
                        Member assigned:
                        <input className='modalLabel' type="text" id="member" required/>
                    </label>
                </li>
                
            </ul>

        </form>
       
      </Modal>
    </div>
  );
}

export default AddTaskModal;

