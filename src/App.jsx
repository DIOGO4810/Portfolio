import { useState } from 'react'
import Competencias from './pages/competencias'
import Navbar from './components/navbar'
import Homepage from './pages/homepage'
import Notfound from './pages/NotFound'
import { Route, Routes} from 'react-router-dom'
import './CSS/App.css'

function App() {

  return (
    
    <div>

    <Navbar/>
    
    
      
      <Routes>
      <Route path='/competencias' element= {<Competencias />} />
      <Route path='/' element= {<Homepage />} />
      <Route path='*' element= {<Notfound />} />
      </Routes>

    
    </div>
            


   
  );
}

export default App
