"use client";
import { useEffect, useState } from 'react'
import styles from './SelectHour.module.scss'
import { Professional } from '../../models/Professional'

const listHour = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "13:30", "14:00", "14:30", "15:00", "15:30"]

interface PropsSelectHour {
    professional: Professional | undefined
}

const SelectHour: React.FC<PropsSelectHour> = ({professional}) => {
    const [selectHour, setSelectHour] = useState<number | null>(null)

    useEffect(() => {
        setSelectHour(null)
    }, [professional])
    
    return (
        <div className={styles.containerSelecteHour}>
            <p>Horários Disponíveis de <b>{`${professional?.name ?? ''}`}</b> </p>

            <div className={styles.btnSelecteHour}>
                {listHour.map((item, i) => (
                    <button 
                        type='button' 
                        onClick={() => setSelectHour(i)} 
                        className={`${selectHour == i ? styles.selectedHour : ''}`} key={i}>
                        {item}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SelectHour
