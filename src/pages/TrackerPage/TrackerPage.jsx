import Calendar from 'components/Calendar/Calendar';
import CalendarPagination from 'components/CalendarPagination/CalendarPagination';
import DailyInfo from 'components/DailyInfo/DailyInfo';
import { useState } from 'react';

export function getDaysInMonth(date) {
  return new Date(date.getYear(), date.getMonth() + 1, 0).getDate();
}

const TrackerPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

  const [dateForCalendar, setDateForCalendar] = useState(() => {
    return new Date();
  });

  const handlePreviousMonth = () => {
    setDateForCalendar(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      setCurrentMonth(newDate.getMonth());
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setDateForCalendar(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      setCurrentMonth(newDate.getMonth());
      return newDate;
    });
  };

  function getFormattedDate(day, monthNumber) {
    const year = new Date().getFullYear();
    const date = new Date(year, monthNumber - 1, day);
    return date;
  }

  const handleCalendarChange = number => {
    const selectedDate = getFormattedDate(number, currentMonth);
    setDateForCalendar(selectedDate);
  };

  return (
    <div>
      <DailyInfo dateForCalendar={dateForCalendar} />
      <CalendarPagination
        dateForCalendar={dateForCalendar}
        handlePreviousMonth={handlePreviousMonth}
        handleNextMonth={handleNextMonth}
      />
      <Calendar
        setDateForCalendar={handleCalendarChange}
        dateForCalendar={dateForCalendar}
        getDaysInMonth={getDaysInMonth}
      />
    </div>
  );
};
export default TrackerPage;
