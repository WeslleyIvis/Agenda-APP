'use client'
import { useEffect, useState } from 'react'
import { Professional } from '../../models/Professional'
import Image from 'next/image'

import style from './SelectProfessional.module.scss'

interface PropsSelectProfessional{
    setSaveSeletectedProfessional: React.Dispatch<React.SetStateAction<Professional | undefined>>
    onNavigate?: (professional: Professional) => void
    navigable?: boolean
    title: string
}

const SelectProfessional: React.FC<PropsSelectProfessional> = ({setSaveSeletectedProfessional, title ='', navigable, onNavigate}) => {
    const [dataProfessional, setDataProfessional] = useState<Professional[] | null>(null)
    const [selectedProfessional, setSelectedProfessional] = useState<number | null>(0)

    useEffect(() => {
        const storedIndex = localStorage.getItem('selectedProfessionalIndex');
        if(storedIndex !== null) {
            setSelectedProfessional(Number(storedIndex))
        }

        fetch('http://192.168.1.121:3001/api/professionals')
            .then((r) => {
                if (!r.ok) {
                    throw new Error('Erro na busca')
                }
                return r.json()
            })
            .then((data) => {
                setDataProfessional(data)
                setSaveSeletectedProfessional(data[0])
            })
            .catch((err) => {
                return {error: err}
            })
    }, [])

    if(!dataProfessional) return (
        <div className={`${style.containerLoading} align-mobile-containers`}>
            <p><b>Escolha o Profissional</b></p>
            <div className='container-flex-professionals '>
                {[1,2,3].map((item) => (
                    <div key={item} className='loading-box-professional'></div>
                ))}
            </div>
        </div>
    )
    
    return (
        <div className={style.containerProfessionals}>
            <p>{title}</p>
            <section>
                {dataProfessional.map((item, i) => (
                    <div
                        onClick={() => {
                                setSelectedProfessional(i)
                                setSaveSeletectedProfessional(item)
                                localStorage.setItem('selectedProfessionalIndex', String(i))
                                localStorage.setItem('selectedProfessional', JSON.stringify(item))
                                if(navigable && onNavigate) {
                                    onNavigate(item)
                                }
                            }
                        } 
                        className={`
                            ${style.cardProfessional} ${selectedProfessional == i ? style.selected: !selectedProfessional && i == 0 ? style.selected : ''}
                        `} 
                        key={i}>
                        <Image
                            src={item.image ? item.image : "/assets/poster_video.png"}
                            width={50} // defina o tamanho desejado
                            height={50}
                            alt={item.name}
                        
                            className='rounded-image'
                        />
                        <p>{item.name}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default SelectProfessional
