import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AgendarHorario from './pages/AgendaHorarios/AgendaHorario';
// import SignUpForm from './templates/SignUpFormProfessional';
// import LoginScreen from './templates/LoginScreen';
import TypographyTest from './pages/TypographyTest/TypographyTest';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<TypographyTest />}></Route>
        </Routes>
      </Router>      
    </>
  );
}

export default App;
