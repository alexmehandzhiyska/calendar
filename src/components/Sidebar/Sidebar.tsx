import { FC } from 'react';

import MiniCalendar from '../MiniCalendar/MiniCalendar';
import './Sidebar.css';

const Sidebar: FC = () => {
    return (
        <aside className="sidebar">
            <button className="add-event">+</button>
            
            <MiniCalendar></MiniCalendar>

            <article className="calendar-list">
                <h3>My Calendars</h3>

                <section className="calendar-list-item">
                    <input type="checkbox" name="life" id="life"/>
                    <label htmlFor="life"></label>
                    <p>Life</p>
                </section>

                <section className="calendar-list-item">
                    <input type="checkbox" name="university" id="university"/>
                    <label htmlFor="university"></label>
                    <p>University</p>
                </section>

                <section className="calendar-list-item">
                    <input type="checkbox" name="work" id="work"/>
                    <label htmlFor="work"></label>
                    <p>Work</p>
                </section>

                <section className="calendar-list-item">
                    <input type="checkbox" name="high-school" id="high-school"/>
                    <label htmlFor="high-school"></label>
                    <p>High School</p>
                </section>
            </article>
        </aside>
    );
};

export default Sidebar;