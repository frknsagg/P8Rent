import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Productpage from './pages/ProductPage/Productpage';



function App(): ReactElement {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/products' element={<Productpage />}></Route>
			
        </Routes>
    </BrowserRouter>
	);
}

export default App;