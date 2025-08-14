import dayjs from 'dayjs';
import React from 'react';
dayjs.locale('uk')

type Props = {
  weekdayShort: string[];
};

export const WeekDaysHeader = ({ weekdayShort }: Props) => (
  <div className="weekdays">
    {weekdayShort.map((label) => (
      <div key={label} className="daysDiv">
        <div className="weekday">{label}</div>
      </div>
    ))}
  </div>
);
