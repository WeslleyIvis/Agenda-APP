import React, { useState } from 'react';

import styles from './SelectDay.module.scss'
import iconSeta from '../../assets/icon_seta.svg';

import { DayFormat } from '../../pages/AgendaHorarios/AgendaHorario';

interface PropsSelectDay {
    days: DayFormat[],
    nameMonth: string,
    nextWeek: number,
    setCountDays: React.Dispatch<React.SetStateAction<number>>
    handlerWeekRef: React.RefObject<number[]>
}

const SelectDay: React.FC<PropsSelectDay> = ({ days, nameMonth, nextWeek, handlerWeekRef, setCountDays }) => {
    const [selectedDay, setSelectedDay] = useState<number | null>(null);

    return (
        <div className={styles.containerSelectDay}>
            <div className={styles.controls}>
                <button onClick={() => {
                    
                    handlerWeekRef.current.pop()
                    const previous = handlerWeekRef.current[handlerWeekRef.current.length -1] || 0
                    setCountDays(previous)
                }}>
                    <img src={iconSeta} alt="Voltar" />
                </button> 
                <h3>
                    {nameMonth}
                </h3>
                <button onClick={() => setCountDays(nextWeek)}>
                    <img src={iconSeta} alt="Avançar" />
                </button>
            </div>
            <div className={styles.containerDays}>
                {days.map((item, i) => (
                    <div key={i} onClick={() => setSelectedDay(item.day)}>
                        <p>{item.weekday.slice(0, 3).toUpperCase()}</p>
                        <p className={`${selectedDay == item.day ? styles.selectedItem : ''}`}>{item.day}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectDay
