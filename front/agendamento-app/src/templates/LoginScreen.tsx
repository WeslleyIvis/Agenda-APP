import './LoginScreen.css';
import { CiUser } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";

const LoginScreen = () => {
    return (

        <div className="login-container">
            <div className="background-section"></div>
            <h1 className="title">HBGB</h1>

            <div className="form-section">
                <div className="form-content">
                    <h1>Bem vindo</h1>

                    <form className="login-form">
                        <div className="input-field">
                            <input
                                type="email"
                                placeholder="Email"
                                required
                            />
                            <CiUser className="input-icon" />
                        </div>

                        <div className="input-field">
                            <input
                                type="password"
                                placeholder="Senha"
                                required
                            />
                            <FaRegEye className="input-icon" />
                        </div>

                        <button type="submit" className="login-button" style={{color: '#4A4444'}}>Login</button>

                        <div className="form-footer">
                            <a href="#" className="forgot-password" style={{color:'#AEAEAE'}}>Esqueceu sua senha?</a>
                            <p>Não tem uma conta? <a href="#" className="register-link" style={{color: '#DF5F4C'}}>Criar</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen