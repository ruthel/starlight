"use client"
import {createContext, useContext, useEffect, useState} from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {useRouter} from "next/router";

const AppContext = createContext();

export function AppWrapper({children}) {
  const [state, setState] = useState();
  const [snackOpt, setSnackOpt] = useState({});
  const router = useRouter()
  const [loading, setLoading] = useState(router.pathname.includes('editor'));

  const handleStart = (e) => setLoading(e.includes('editor'))
  const handleComplete = () => setTimeout(() => setLoading(false), 2000);

  const routerInitializer = () => {
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }

  useEffect(() => {
    routerInitializer()
  }, [router]);

  useEffect(() => {
    if (state !== undefined)
      localStorage.setItem('appState', JSON.stringify(state.mapObj));
  }, [state]);

  useEffect(() => {
    const savedState = localStorage.getItem('appState');
    if (savedState) setState({mapObj: JSON.parse(savedState || '')});
  }, []);

  const Loading = () => (
    <div
      className='w-screen h-screen fixed top-0 left-0 bottom-0 right-0 bg-white flex items-center flex-col justify-center z-[1000000]'>
      <img src="/loader.gif" alt="#" width={400}/>
      <div className='text-center text-sm'>First time may take up to 15-20 seconds, Please stay with us for a moment
      </div>
    </div>
  )

  return (
    <AppContext.Provider
      value={{state, setState: obj => setState({...state, ...obj}), snackOpt, setSnackOpt, setLoading}}>
      {children}
      {loading && <Loading/>}
      <Snackbar
        open={snackOpt.open || false}
        autoHideDuration={3000}
        onClose={() => setSnackOpt({...snackOpt, open: false})}>
        <Alert
          anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
          onClose={() => setSnackOpt({...snackOpt, open: false})}
          severity={snackOpt.severity}
          variant="filled"
          sx={{width: '100%'}}>
          {snackOpt.message}
        </Alert>
      </Snackbar>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
