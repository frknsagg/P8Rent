import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import CarsPage from './pages/Carspage/CarsPage';
import About from './pages/About/AboutPage';



function App(): ReactElement {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/cars' element={<CarsPage />}></Route>
        <Route path='/About' element={<About />}></Route>
        </Routes>
    </BrowserRouter>
	);
}

export default App;