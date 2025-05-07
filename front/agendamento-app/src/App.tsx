import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgendarHorario from './pages/Agendar_horario';
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
