import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const firstStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(0.3)', //translate(-50%, -50%)
  transition: 'transform 5s ease',
  width: '65vw',
  height: '70vh',
  bgcolor: 'background.paper',
  border: '2px solid rgba(97, 97, 97, 0.3)',
  borderRadius: '3vmax',
  boxShadow: 20,
  textAlign: 'center',
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [style, setStyle] = React.useState({
    position: 'absolute',
    top: '50%',
    left: '50%',
    // transform: 'translate(-50%, -50%) scale(0.3)', //translate(-50%, -50%)
    // transition: 'transform 5s ease',
    width: '65vw',
    height: '70vh',
    bgcolor: 'background.paper',
    border: '2px solid rgba(97, 97, 97, 0.3)',
    borderRadius: '3vmax',
    boxShadow: 20,
    textAlign: 'center',
    p: 4,
  });

  const handleOpen = () => {
    console.log('hi');
    setOpen(true);
    // setStyle((prev) => ({...prev, transform: 'translate(-50%, -50%) scale(0.8)'}));
    // console.log(document.getElementsByClassName('css-1d1g4zy'))
    // document.getElementsByClassName('css-gfqxk9').style.transform = 'translate(-50%, -50%) scale(0.8)';
    console.log({...firstStyle, scale: 1})
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={open ? 'always-modal go-modal' : 'always-modal close-modal'}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}