import { useEffect, useState } from 'react'
import { Professional } from '../../models/Professional'

import style from './SelectProfessional.module.scss'

interface PropsSelectProfessional{
    setSaveSeletectedProfessional: React.Dispatch<React.SetStateAction<Professional | undefined>>
}

const SelectProfessional: React.FC<PropsSelectProfessional> = ({setSaveSeletectedProfessional}) => {
    const [dataProfessional, setDataProfessional] = useState<Professional[] | null>(null)
    const [selectedProfessional, setSelectedProfessional] = useState<number | null>(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/professionals')
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
            <p><b>Escolha o Profissional</b></p>
            <div>
                {dataProfessional.map((item, i) => (
                    <div
                        onClick={() => {
                                setSelectedProfessional(i)
                                setSaveSeletectedProfessional(item)
                            }
                        } 
                        className={`
                            ${style.cardProfessional} ${selectedProfessional == i ? style.selected: !selectedProfessional && i == 0 ? style.selected : ''}
                        `} 
                        key={i}>
                        <img src={`${item.image}`} alt="" />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectProfessional
