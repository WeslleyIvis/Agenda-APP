import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AgendarHorario from './pages/AgendaHorarios/AgendaHorario'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AgendarHorario />}></Route>
        </Routes>
      </Router>
        

   
    </>
  )
}

export default App
