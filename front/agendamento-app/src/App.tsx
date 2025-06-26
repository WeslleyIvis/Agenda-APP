import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AgendarHorario from './pages/AgendaHorarios/AgendaHorario';
import { AnimatePresence, motion } from 'framer-motion';

import StarterApp from './pages/StartApp/StarterApp';
import SignUpFormUser from './pages/SignUpFormUser/SignUpFormUser';
import LoginScreen from './pages/LoginScreen/LoginScreen';


const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={
					<PageWrapper>
						<StarterApp />
					</PageWrapper>
				}></Route>
				<Route path='/login' element= {
					<PageWrapper>
						<LoginScreen />
					</PageWrapper>
				}></Route>
				<Route path='/agendar' element= {
					<PageWrapper>
						<AgendarHorario />
					</PageWrapper>
				}></Route>
			</Routes>
		</AnimatePresence>
	)
}

const PageWrapper = ({ children }: {children: React.ReactNode}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30}}
			animate={{ opacity: 1, y: 0}}
			exit={{ opacity: 0, y: -30 }}
			transition={{ duration: 0.4 }}
		>
			{children}
		</motion.div>
	)
}

function App() {

  return (
    <>
		<Router>
			<AnimatedRoutes />	
		</Router>      
    </>
  );
}

export default App;
