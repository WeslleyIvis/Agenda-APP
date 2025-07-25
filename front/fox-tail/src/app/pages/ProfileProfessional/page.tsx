'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'

import { Professional } from '@/app/models/Professional'
import { icons } from '../../../../public/assets/icons'
import styles from './ProfileProfessiona.module.scss'
import MenuMobile from '@/app/components/menu_mobile/MenuMobile'
import BackButton from '@/app/components/BackButton/BackButton'
import Link from 'next/link'

const ProfessionalAppointment = () => {
    const [professionalObject, setProfessionalObject] = useState<Professional | null>(null)

    const btnActions = [
        {
            name: 'Whatsapp',
            icon: icons.icon_whatsapp,
            routeNavigate: '',
            bgColor: '#0ec043'
        },
        {
            name: 'Instagram',
            icon: icons.icon_instagram,
            routeNavigate: '',
            bgColor: '#f30257'
        },
        {
            name: 'Agendar',
            icon: icons.icon_calendar_filled,
            routeNavigate: './ScheduleAppointment',
            bgColor: '#5b89ff'
        }
    ]

    useEffect(() => {
        const storageProfessional = localStorage.getItem('selectedProfessional')
        if(storageProfessional) {
            setProfessionalObject(JSON.parse(storageProfessional))
        }
    }, [])

    const dateClass = new Date()
    const todayDate = dateClass.toLocaleDateString('pt-BR', {weekday: 'long'})
   
    return (
        <div className='padding-mobile'>
            <section className={styles['profile-professional']}>
                {professionalObject ?
                    <div className={styles['items-professional']}>
                        <Image 
                            className='rounded-image'
                            src={professionalObject.image || 'https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256_1280.png'}
                            alt={professionalObject.name}
                            width={150} 
                            height={150}
                        />
                        <h1>{professionalObject.name}</h1>
                        <p>❤❤❤❤❤ 1.432 reviews</p>
                    </div>
                    :
                    null
                }
                <div className={styles['container-buttons']}>
                    {btnActions.map((btn, i) => {
                        const DisplayIcon = btn.icon
                        return (
                            <div key={i}>
                                <Link  
                                    href={btn.routeNavigate}
                                > 
                                    <button
                                        className={`${styles['rounded-button']}`} 
                                        style={{backgroundColor: btn.bgColor}}
                                    >
                                        <DisplayIcon 
                                            width={25}
                                            height={25}
                                            fill='white'
                                        />
                                    </button>
                                    
                                </Link>
                                <p className='p-mini'>
                                    {btn.name}
                                </p>
                            </div>
                        )
                    })}
                </div>


            </section>

            <section className={styles['container-info-professional']}>
                <div>
                    {
                        professionalObject?.working_hours ?
                        <div className={styles['items-info-professional']}>
                            <h3>Horário de Trabalho</h3>
                            {professionalObject.working_hours.map((item, i) => {
                                const todayLower = item.day.toLowerCase() as string
                                const [horas, minutos] = item.start.split(':').map(Number)
                                console.log(horas, minutos)
                                console.log(item)
                                return (
                                    <div 
                                        key={i} 
                                        className={`${styles['disply-days-hours']}`}
                                        style={{color:  todayLower == todayDate ? '#15DA78' : ""}}
                                    >
                                        <p>° {item.day}</p>
                                        <div>
                                            <span>{item.start} -</span>
                                            <span>{item.end}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        :
                        null
                    }
                </div>
                <div >
                    <h3>Endereço</h3>
                    <div className={styles['container-locale']}>
                        <p className='p-text'>R. Bento José de Moraes, 75 - Jardim Domitila, São Paulo - SP, 04466-100</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14614.614871131107!2d-46.67220203022461!3d-23.688338499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce455c5ee62263%3A0xb54f576ac96ae57d!2sBarbearia%20HBGB!5e0!3m2!1spt-BR!2sbr!4v1753120070095!5m2!1spt-BR!2sbr" width="150" height="100" ></iframe>
                    </div>
                </div>
            </section>

            <BackButton navigatePage='./Main'/>
            <MenuMobile />
        </div>
    )
}

export default ProfessionalAppointment
