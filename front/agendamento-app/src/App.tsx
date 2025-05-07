import { useState } from 'react'
import './App.css'
import SocialScreen from './templates/SocialScreen'
import LoginScreen from './templates/LoginScreen'
import SignUpFormUser from './templates/SignUpFormUser'
import SignUpFormProfessional from './templates/SignUpFormProfessional'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    {
    // <SocialScreen />
    // <LoginScreen />
    // <SignUpFormUser />
    <SignUpFormProfessional />
    }

  </div>
  )
}

export default App
