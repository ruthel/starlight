import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import {Download, Mail} from "react-feather";
import download from 'downloadjs';
import axios from "axios";

const Transition = React.forwardRef((props, ref,) => <Slide direction="up" ref={ref} {...props} />);


export default function Notify({open, handleClose, data, id}) {

  const downloadFile = () => {
    download(data, 'image.png', 'image/png')
    handleClose()
  }

  const sendMailWithMap = () => {
    axios.post('/api/checkout/download', {id}).then(res => {
      if (res.status === 200)
        handleClose()
    })
  }

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth='sm'
        fullWidth
      >
        <DialogContent>
          <DialogContentText>
            <div className='text-center'>
              <img src="/ico/success.png" className='mx-auto' alt="#" width={256}/>
            </div>
            <div className='text-2xl text-center mb-2'>Payment Done</div>
            <div className='mb-6 text-center text-sm'>
              The payment of your star map has been done successfully. Now you have two option to get it from the
              platform
            </div>
            <div className='flex items-center gap-3 text-white font-medium justify-center'>
              <button
                onClick={downloadFile}
                className='shadow-lg px-6 py-2 rounded text-sm bg-blue-600 flex items-center gap-2'>
                <span>Download</span>
                <Download/>
              </button>
              <button
                onClick={sendMailWithMap}
                className='shadow-lg px-6 py-2 rounded text-sm bg-red-600 flex items-center gap-2'>
                <span>Send by mail</span>
                <Mail/>
              </button>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
