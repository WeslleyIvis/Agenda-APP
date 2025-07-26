"use client";
import { useState } from 'react';
import Link from 'next/link';

import styles from './LoginScreen.module.scss';
import { icons } from '../../../../public/assets/icons';
import AutForm from '../../components/AutoForm/AutoForm';

interface LoginFormValues {
	email: string;
	password: string;
}

const LoginScreen = () => {
		const [loginFormValues, setForm] = useState<LoginFormValues>({
			email: '',
			password: ''
		})

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
				console.log(e)
				setForm({ ...loginFormValues, [e.target.name]: e.target.value})
		}

		const handleSubmit = (e: React.FormEvent) => {
				e.preventDefault();
				console.log("From data:", loginFormValues)
		}

		const inputsForms = [
			{
				icon: icons.icon_user,
				name: "email",
				type:"email",
				placeholder: "Email",
			},
			{
				icon: icons.icon_eye,
				name: "password",
				type:"password",
				placeholder: "Senha",
			}
		]
//<h1 className='form-title'>HGBG</h1>

	return (
		<div>
			<div className={styles.bgImage}></div>
			<section className='container-login-screen'>
				
				<div className={styles.infoLogin}>
					<h2 className='form-subtitle'>Bem Vindo</h2>
					<p className='form-text'>Lorem ipsum dolor sit amet, consectetur adipiscing eli,</p>
				</div>
				<AutForm 
					items={inputsForms} 
					formValues={loginFormValues as any}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					link='./Main'
				/>
					
				<div style={{paddingBottom: '50px'}}>
					<Link href="./SignUpFormUser">
						<p >Esqueceu sua senha?</p> 
					</Link>
 					
				</div>
				<div className={styles.containerRegister}>
						<p>Não tem conta? 
							<Link href="./SignUpFormUser">
								<b> Cadastre-se</b>
							</Link>
						</p>
				</div>

				
			</section>
		</div>
	);
};

export default LoginScreen;