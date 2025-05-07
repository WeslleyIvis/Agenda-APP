import {FcGoogle} from 'react-icons/fc';
import {FaFacebook} from 'react-icons/fa';
import './SocialScreen.css';

const LoginScreen = () => 
{
  return (
    <div className='login-container'>
      <div className='login-box'>
        <h1 className='title'>HBGB</h1>
        <h1 className='text-content'>Book an Appointment for
          Salon, Spa & Barber
        </h1>
                   

        <div className="social-login">
          <button className="google-btn">
            <FcGoogle className = 'icon' style={{marginRight: '25px'}}/>
            Continue com Google
          </button>

          <button className="facebook-btn">
            <FaFacebook className='icon'/>
            Continue com Facebook
          </button>
        </div>
        <div className="login-footer"> 
          <p>Já possui conta? <a href="/login">Entrar</a></p>
        </div>
      </div>
    </div>
  );
}; 

export default LoginScreen;