import {FcGoogle} from 'react-icons/fc';
import {FaFacebook} from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

import styles from './StarterApp.module.scss'
import video from '../../assets/login_video.mp4'
import posterImage from '../../assets/poster_video.png'

const StarterApp = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className={styles.bgVideo}>
        <video 
            autoPlay
            muted
            loop
            playsInline
            poster={posterImage}
        >
            <source src={video} type="video/mp4"/>
          </video>
      </div>
      <div className={styles.containerLoginScreen}>
        <h1>HBGB</h1>
        <p>Book an Appoitment for Salon, Spa & Barber</p>
        <button 
            className="button-secondary" 
            type='button'
            onClick={() => navigate("/login")}
        >Começar</button>
      </div>
    </div>
  );
}; 

export default StarterApp;