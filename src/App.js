import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Temp from './components/Temp';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/temp' element={<Temp />} />
        </Routes>
      </BrowserRouter>    </div>
  );
}

export default App;
