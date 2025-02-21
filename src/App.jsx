import { useState } from 'react'
import Competencias from './pages/competencias'
import Navbar from './components/navbar'
import Homepage from './pages/homepage'
import Notfound from './pages/NotFound'
import Projetos from './pages/projetos'
import { Route, Routes} from 'react-router-dom'
import './CSS/App.css'

function App() {

  return (
    
    <div>

    <Navbar/>
    
    
      
      <Routes>
      <Route path='/' element= {<Homepage />} />
      <Route path='/competencias' element= {<Competencias />} />
      <Route path='/projetos' element= {<Projetos />} />
      <Route path='*' element= {<Notfound />} />
      </Routes>

    
    </div>
            


   
  );
}

export default App
