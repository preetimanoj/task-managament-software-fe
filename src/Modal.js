import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function ModalApp() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
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
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Task Name</h2>
        <button onClick={closeModal}>X</button>
        </div>
       
        <div className='modalcontent'>
            <p>
                description .......
            </p>
            <div>
            <p>
                status 
            </p>
            <p>
                hrs 
            </p>
            </div>

        </div>
       
      </Modal>
    </div>
  );
}

export default ModalApp;

