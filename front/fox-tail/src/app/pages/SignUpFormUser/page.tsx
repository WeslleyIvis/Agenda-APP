"use client";
import React from 'react'
import Link from 'next/link';

import AutForm from '../../components/AutoForm/AutoForm'
import { icons } from '../../../../public/assets/icons';

interface RegisterUserFormValues {
    name: string;
    email: string;
    phone_number: string;
    password: string;
    confirmPassword: string;
}

const SignUpFormUser = () => {
    const [registerUserFormValues, setregisterUserFormValues] = React.useState<RegisterUserFormValues>({
        name: '',
        email: '',
        phone_number: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setregisterUserFormValues(
            { ...registerUserFormValues, 
                [e.target.name]: e.target.value 
            })
    }

    const handleRegisterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Formularioo: ", registerUserFormValues)
    }

    const registeFormItems = [
        {
            icon: icons.icon_user,
            name: "name",
            type: "text",
            placeholder: "Nome Completo",
        },
        {
            icon: icons.icon_envelope,
            name: "email",
            type: "email",
            placeholder: "Email",
        },
        {
            icon: icons.icon_telephone,
            name: "phone_number",
            type: "tel",
            placeholder: "Telefone",
        },
        {
            icon: icons.icon_eye,
            name: "password",
            type: "password",
            placeholder: "Senha",
        },
        {
            icon: icons.icon_eye,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirmar Senha",
        }
    ]

    return (
        <div className='container-login-screen'>
            <div>
                <h1 className='form-title'>Criar Conta</h1>
            </div>
            <AutForm 
                items={registeFormItems} 
                formValues={registerUserFormValues as any}
                handleChange={handleChange}
                handleSubmit={handleRegisterSubmit}
            />
            <div className='container-register' style={{paddingTop: '50px'}}>
                <p>Já tem conta? 
                    <Link href="./LoginScreen">
                        <b> Fazer Login</b>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignUpFormUser
