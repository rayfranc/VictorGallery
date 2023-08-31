
import '@fontsource/anton'
import '@fontsource/adamina'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/events' element={<Events/>}/>
        
      </Routes>
    </Router>
    </>
  )
}

export default App
