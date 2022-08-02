import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function ModalApp(props) {
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
                description .......
            </p>
            <div>
            <label>
              Status : 
              <select className='dropdown' value={value} onChange={handleChange}>
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
            <label>Hours:
              <input className='modalLabel2' type="number" id="hours" required/>
            </label>
            </div>

        </div>
       
      </Modal>
    </div>
  );
}

export default ModalApp;

