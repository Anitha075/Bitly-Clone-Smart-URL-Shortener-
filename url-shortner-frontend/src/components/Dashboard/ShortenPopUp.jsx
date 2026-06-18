import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import React from 'react'
import CreateNewShorten from './CreateNewShorten';

const ShortenPopUp = ({ open, setOpen, refetch}) => {

    const handleClose = () => {
        setOpen(false);
    };

  return (
   <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <div className='flex justify-center items-center h-full w-full'>
            <CreateNewShorten setOpen={setOpen} refetch={refetch} />
        </div>
  {/* <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 4,
    }}
  >
    <Typography variant="h6">
      Test Modal
    </Typography>
  </Box> */}
</Modal>
  )
}

export default ShortenPopUp;