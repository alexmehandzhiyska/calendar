import { FC, useState, useEffect } from 'react';
import moment from 'moment';

import './MiniCalendar.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const MiniCalendar: FC = () => {
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);

    useEffect(() => {
        const currentDate = moment();

        const day = Number(currentDate.format('D'));
        const month = Number(currentDate.format('M'));
        const year = Number(currentDate.format('Y'));
        
        setDay(day);
        setMonth(month);
        setYear(year);
    }, []);

    const getFirstDay = (): number => {
        const firstDay = moment()
            .startOf("month")
            .format("d"); 
    
        return Number(firstDay) - 1;
    };
    
    const generateCalendarData = () => {
        let blanks = [];
    
        for (let i = 0; i < getFirstDay(); i++) {
            blanks.push(<td className="calendar-day empty"></td>)
        }
    
        let daysInMonth = [];
    
        for (let i = 1; i <= moment().daysInMonth(); i++) {
            daysInMonth.push(<td className={`calendar-day ${i == day ? 'today' : ''}`}>{i}</td>)
        }
    
        const allSlots = [...blanks, ...daysInMonth];
        
        let rows: JSX.Element[][] = [];
        let cells: JSX.Element[] = [];
    
        allSlots.forEach((cell, i) => {
            if (i % 7 !== 0) {
                cells.push(cell);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(cell);
            }
    
            if (i === allSlots.length - 1) {
                rows.push(cells);
            }
        });
    
        let allDays = rows.map((row, i) => {
            return <tr key={i}>{row}</tr>;
        });
    
        return allDays;
    }
    
    return (
        <>
            <h2 id="mini-calendar-title">{months[month - 1]} <span id="mini-calendar-year">{year}</span></h2>

            <table className="mini-calendar">
                <thead>
                    <tr>
                        {days.map((day, i) => <th key={i}>{day}</th>)}
                    </tr>
                </thead>

                <tbody>
                    {generateCalendarData()}
                </tbody>
            </table>
        </>
    );
};

export default MiniCalendar;