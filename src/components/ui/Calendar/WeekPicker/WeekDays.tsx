import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
dayjs.locale('uk')

type Props = {
  days: Dayjs[];
  setAnchor: (d: Dayjs) => void;
  isDateDisabled: (d: Dayjs) => boolean;
  day: Dayjs | null;
  setValue: (newValue: Dayjs | null) => void;
};

export const WeekDays = ({ days, setAnchor, isDateDisabled, day, setValue }: Props) => {
  const handleDayClick = (date: Dayjs) => {
    if (!isDateDisabled(date)) {
      setAnchor(date);
      setValue(date);
    }
  };

  return (
    <div className="days">
      {days.map((date) => {
        const isToday = date.isSame(dayjs(), 'day');
        const isSelected = day ? date.isSame(day, 'day') : false;
        const disabled = isDateDisabled(date);

        return (
          <button
            key={date.toString()}
            onClick={() => handleDayClick(date)}
            disabled={disabled}
            className={`dayButton ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`}
          >
            {date.date()}
          </button>
        );
      })}
    </div>
  );
};
