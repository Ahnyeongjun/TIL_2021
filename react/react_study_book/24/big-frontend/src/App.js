import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  )
}

export default App;
