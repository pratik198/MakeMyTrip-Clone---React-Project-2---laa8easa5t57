import React, { useState } from 'react';
import moment from 'moment';
import './Calender.css'; 
const Calendar = () => {

  const [currentMonth, setCurrentMonth] = useState(moment());

  const renderHeader = () => {
    return (
      <div className="header">
        <button onClick={prevMonth}>&lt;</button>
        <h2>{currentMonth.format('MMMM YYYY')}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
    );
  };
  const renderDays = () => {
    const weekdays = moment.weekdays();
    return weekdays.map((day, index) => (
      <div className="day" key={index}>
        {day}
      </div>
    ));
  };

  const renderCells = () => {
    const monthStart = moment(currentMonth).startOf('month');
    const monthEnd = moment(currentMonth).endOf('month');
    const startDay = moment(monthStart).startOf('week');
    const endDay = moment(monthEnd).endOf('week');

    const days = [];
    let day = startDay;

    while (day.isBefore(endDay)) {
      days.push(
        <div key={day.format('YYYY-MM-DD')} className="day">
          {day.format('D')}
        </div>
      );
      day = day.clone().add(1, 'day');
    }

    return days;
  };                                                                                                                                                                                                                                                                                                                                                                                                                                                  

  const prevMonth = () => {
    setCurrentMonth(moment(currentMonth).subtract(1, 'month'));
  };

  const nextMonth = () => {
    setCurrentMonth(moment(currentMonth).add(1, 'month'));
  };

  return (
    <div className="calendar">
      {renderHeader()}
      <div className="days">{renderDays()}</div>
      <div className="cells">{renderCells()}</div>
    </div>
  );
};

export default Calendar;
