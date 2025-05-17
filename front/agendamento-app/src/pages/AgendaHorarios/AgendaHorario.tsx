import { useEffect, useState, useRef } from 'react';
import { Professional } from '../../models/Professional';

import MenuMobile from '../../components/menu_mobile/MenuMobile';
import ButtonVoltar from '../../components/ButtonVoltar/ButtonVoltar';
import SelectDay from '../../components/SelectDay/SelectDay';
import SelectHour from '../../components/SelectHour/SelectHour';

import styles from './AgendaHorario.module.scss'
import SelectProfessional from '../../components/SelectProfessional/SelectProfessional';

export type DayFormat = {
    day: number,
    weekday: string
}

const AgendaHorario = () => {
    const [selectedProfessional, setSelectedProfessional] = useState<Professional | undefined>(undefined)
    const [days, setDays] = useState<DayFormat[]>([])
    const [countDays, setCountDays] = useState<number>(0)
    const [nextWeek, setNextWeek] = useState(0)
    const handlerWeekRef = useRef<number[]>([])

    const date = new Date()
    const [nameMonth, setNameMonth] = useState("")
    const UperCaseNameMonth = nameMonth.charAt(0).toUpperCase() + nameMonth.slice(1)

    const workDays = [ "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado" ]

    const [viewDays, setViewDays] = useState<number>(7);

    const updateViewDays = () => {
        const width = window.innerWidth;
            if (width < 360) {
            setViewDays(5); // S Mobile
        } else if (width < 425) {
            setViewDays(6); // M Mobile
        } else {
            setViewDays(7); // L Mobile
        }
    }

    // Evento de redimensionamento da janela
    useEffect(() => {
        updateViewDays();
        
        window.addEventListener('resize', updateViewDays);
        return () => window.removeEventListener('resize', updateViewDays);
    }, [])

    useEffect(() => {
        const formatter = new Intl.DateTimeFormat('pt-BR', {weekday: 'long'})
        const newDays: DayFormat[] = []
        let i = countDays;
        
        while(newDays.length < viewDays) {

            const dayloop = new Date(date)
            dayloop.setDate(date.getDate() + i)

            const weekday = formatter.format(dayloop)

            if(workDays.includes(weekday)) {
                newDays.push({
                    day: dayloop.getDate(),
                    weekday
                })
            }
            i++
        }
        
        const monthOfWeek = new Date(date)
        monthOfWeek.setDate(date.getDate() + (i - 4))
        setNameMonth(Intl.DateTimeFormat('pt-BR', {month: 'long'}).format(monthOfWeek))

        if(!(handlerWeekRef.current[handlerWeekRef.current.length - 1] == countDays)) {
            handlerWeekRef.current.push(countDays)
        }

        setNextWeek(i)
        setDays(newDays)
    }, [countDays, viewDays, selectedProfessional]) 

  return (
    <>
        <div className={styles.mainContainer}>
            <ButtonVoltar placeholder="Agendar Horário"/>
            <SelectDay 
                days={days}
                nameMonth={UperCaseNameMonth}
                handlerWeekRef={handlerWeekRef}
                nextWeek={nextWeek} 
                setCountDays={setCountDays}
            />
            <SelectHour professional={selectedProfessional}/>
            <SelectProfessional 
                setSaveSeletectedProfessional={setSelectedProfessional}
            />
            <div className='container-button'>
                <button type='button' className="button-primary">Continuar</button>
            </div>
        </div>
       
        <MenuMobile />
    </>
  );
};

export default AgendaHorario;