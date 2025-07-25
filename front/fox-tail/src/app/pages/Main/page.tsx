'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

import MenuMobile from '@/app/components/menu_mobile/MenuMobile'
import SelectProfessional from '@/app/components/SelectProfessional/SelectProfessional'

import { Professional } from '@/app/models/Professional'
import styles from './Main.module.scss'

const Main = () => {
    const router = useRouter()

    const [selectedProfessional, setSelectedProfessional] = React.useState<Professional | undefined>(undefined)
    const [selectIndexUser, setSelectIndexUser] = React.useState<number>(0)

    return (
        <section className={styles.containerMain}>
        <div style={{width: '100%', height: '250px', backgroundColor: '#2b2b2b'}}></div>
        <SelectProfessional 
            setSaveSeletectedProfessional={setSelectedProfessional} 
            title='Escolha o Profissional' 
            navigable={true} 
            onNavigate={(professional) => router.push('./ProfileProfessional')}
        />
        <MenuMobile />
        </section>
    )
}

export default Main
