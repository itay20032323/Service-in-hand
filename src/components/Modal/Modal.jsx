import React from 'react';
import { useState, useRef, useEffect } from 'react';
import "./Modal.css";
import WelcomeModalContent from './WelcomeModalContent';

const firstStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(0)', //translate(-50%, -50%)
  transition: 'transform 1s ease',
  width: '90vw',
  height: '80vh',
  backgroundColor: 'white',
  border: '1px solid rgba(97, 97, 97, 0.3)',
  borderRadius: '5.5vmax',
  // boxShadow: '0px 3px 7px #7e7d7d57',
  textAlign: 'center',
  p: 4,
  zIndex: 5,
  // visibility: 'hidden',
};

const Modal = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log('Clicked outside!');
        setOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Unbind the event listener on cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <button onClick={() => setOpen(true)}>OPEN MODAL</button>
      {/* <div className='modal-background'> */}
        <div className={'my-modal ' + (open ? 'open-my-modal' : 'close-my-modal')} ref={open ? ref : null} style={firstStyle}>
          <WelcomeModalContent />
          <button className="continue-button" onClick={() => setOpen(false)}>המשך</button>
        </div>
      {/* </div> */}
    </>
  )
}

export default Modal
