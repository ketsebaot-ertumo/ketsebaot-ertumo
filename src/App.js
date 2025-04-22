import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Thanks from './pages/Thanks';
  
  
const App = () => {
    return (
      <>
          <ToastContainer />
              {/* <BrowserRouter> */}
              <HashRouter>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/thank-you' element={<Thanks />} />
                </Routes>
              </HashRouter>
              {/* </BrowserRouter> */}
          
      </>
    );
  }
  
  export default App;
  

