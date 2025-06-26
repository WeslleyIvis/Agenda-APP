import { useState } from 'react';

import styles from './LoginScreen.module.scss';
import { CiUser } from 'react-icons/ci';
import { FaRegEye } from 'react-icons/fa';

const inputsForms = [
  {
    icon: '',
    name: "email",
    type:"email",
    placeholder: "Email",
  },
  {
    icon: '',
    name: "password",
    type:"password",
    placeholder: "Senha",
  }
]

const LoginScreen = () => {
    const [form, setForm] = useState({email: '', password: ''})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e)
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("From data:", form)
    }

  return (
    <div>
        <div className={styles.bgImage}></div>
        <section>
            <h1>HGBG</h1>
            <div>
                <h2>Bem Vindo</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli,</p>
            </div>
            <form onSubmit={handleSubmit}>
                {inputsForms.map((item, i) => (
                    <label key={i}>
                        <input 
                            type={item.type} 
                            name={item.name}
                            value={form[item.name as keyof typeof form]}
                            placeholder={item.placeholder}
                            onChange={handleChange}
                            required
                        />
                    </label> 
                ))}
                <button type='submit'>Entrar</button>
            </form>

        </section>
    </div>
  );
};

export default LoginScreen;