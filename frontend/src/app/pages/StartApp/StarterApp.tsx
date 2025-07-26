import Link from 'next/link';
import styles from './StarterApp.module.scss'

const StarterApp = () => {
    return (
        <div>
            <div className={styles.bgVideo}>
                <video 
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/assets/poster_video.png"
                >
                    <source src="/assets/login_video.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className={styles.containerLoginScreen}>
                <h1>HBGB</h1>
                <p>Book an Appoitment for Salon, Spa & Barber</p>
                <Link href={"pages/LoginScreen"} style={{width: '100%'}}>
                    <button 
                        className="button-secondary" 
                        type='button'>
                            Começar
                    </button>
                </Link>
            </div>
        </div>
    );
}; 

export default StarterApp;