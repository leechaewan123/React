import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Display from './pages/Display';


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Profile' element={<Profile/>} />
      <Route path='/Display' element={<Display/>} />
      </Routes>
      
      </BrowserRouter>
  );
}

export default App;
