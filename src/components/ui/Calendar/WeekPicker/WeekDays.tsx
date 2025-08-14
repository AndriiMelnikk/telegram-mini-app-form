import React from 'react';
import dayjs, { Dayjs } from 'dayjs';

type Props = {
  days: Dayjs[];
  anchor: Dayjs;
  setAnchor: (d: Dayjs) => void;
  isDateDisabled: (d: Dayjs) => boolean;
};

export const WeekDays = ({ days, anchor, setAnchor, isDateDisabled }: Props) => (
  <div className="days">
    {days.map(date => {
      const isToday = date.isSame(dayjs(), 'day');
      const isSelectedWeek = date.isSame(anchor, 'week') || date.isSame(anchor, 'isoWeek');
      const disabled = isDateDisabled(date);

      return (
        <div key={date.toString()} className="daysDiv">
          <button
            onClick={() => !disabled && setAnchor(date)}
            disabled={disabled}
            className={`dayButton ${isToday ? 'today' : ''} ${isSelectedWeek ? 'selected' : ''}`}
          >
            {date.date()}
          </button>
        </div>
      );
    })}
  </div>
);
