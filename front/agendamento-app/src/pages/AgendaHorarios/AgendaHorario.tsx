import { useEffect, useState, useRef } from 'react';

import MenuMobile from '../../components/menu_mobile/MenuMobile';
import ButtonVoltar from '../../components/ButtonVoltar/ButtonVoltar';
import SelectDay from '../../components/SelectDay/SelectDay';

export type DayFormat = {
    day: number,
    weekday: string
}

const AgendaHorario = () => {
    const [days, setDays] = useState<DayFormat[]>([])
    const [countDays, setCountDays] = useState<number>(0)
    const [nextWeek, setNextWeek] = useState(0)
    const handlerWeekRef = useRef<number[]>([])

    const date = new Date()
    const [nameMonth, setNameMonth] = useState("")
    const UperCaseNameMonth = nameMonth.charAt(0).toUpperCase() + nameMonth.slice(1)

    const workDays = [ "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado" ]

    useEffect(() => {
        const newDays: DayFormat[] = []
        let i = countDays;

        while(newDays.length < 7) {

            const dayloop = new Date(date)
            dayloop.setDate(date.getDate() + i)

            workDays.forEach((value) => {
                if(value == Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(dayloop)) 
                {
                    const today: DayFormat = {
                        day: dayloop.getDate(),
                        weekday: Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(dayloop)
                    }
                    newDays.push(today)
                }
            })
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
    }, [countDays]) 

  return (
    <>
      <ButtonVoltar placeholder="Agendar Horário"/>
      <SelectDay days={days} nameMonth={UperCaseNameMonth} handlerWeekRef={handlerWeekRef} nextWeek={nextWeek} backWeek={1} setCountDays={setCountDays}/>
      <MenuMobile />
    </>
  );
};

export default AgendaHorario;