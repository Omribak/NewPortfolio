import HomePage from './routes/HomePage/Homepage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <HomePage />
      <Toaster
        toastOptions={{
          style: {
            padding: '1.5rem',
            marginTop: '3rem'
          }
        }}
      />
    </>
  );
}

export default App;
