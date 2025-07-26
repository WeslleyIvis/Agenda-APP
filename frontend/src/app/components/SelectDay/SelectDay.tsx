"use client";
import React, { useState } from 'react';

import styles from './SelectDay.module.scss'

import { DayFormat } from '@/app/pages/ScheduleAppointment/page';
import { icons } from '../../../../public/assets/icons';

interface PropsSelectDay {
    days: DayFormat[],
    nameMonth: string,
    nextWeek: number,
    setCountDays: React.Dispatch<React.SetStateAction<number>>
    handlerWeekRef: React.RefObject<number[]>
}

const SelectDay: React.FC<PropsSelectDay> = ({ days, nameMonth, nextWeek, handlerWeekRef, setCountDays }) => {
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const IconSeta = icons.icon_arrow


    return (
        <div className={styles['container-select-day']}>
            <div className={styles['controls']}>
       
                <button onClick={() => {
                    handlerWeekRef.current.pop()
                    const previous = handlerWeekRef.current[handlerWeekRef.current.length -1] || 0
                    setCountDays(previous)
                }}>
                    <IconSeta 
                        width={20}
                        height={30}
                        className={styles['arrow-s']}
                       
                    />
                </button> 
                <h3>
                    {nameMonth}
                </h3>
                <button onClick={() => setCountDays(nextWeek)}>
                    <IconSeta 
                        width={20}
                        height={30}
                        className={styles['arrow-s']}
                        style={{rotate: '180deg'}}
                    />
                </button>
            </div>
            <div className={styles['container-days']}>
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
