import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgendarHorario from './pages/AgendaHorarios/AgendaHorario';
import SignUpFormProfessional from './pages/SignUpFormProfessional/SignUpFormProfessional';
import SignUpFormUser from './pages/SignUpFormUser/SignUpFormUser';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AgendarHorario />}></Route>
        </Routes>
      </Router>      
    </>
  );
}

export default App;
