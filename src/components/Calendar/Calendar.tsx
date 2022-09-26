import { FC } from 'react';

import Sidebar from '../Sidebar/Sidebar';

const Calendar: FC = () => {
    return (
        <div className="page-wrapper">
            <Sidebar></Sidebar>
            <h1>Calendar</h1>
        </div>
    );
};

export default Calendar;