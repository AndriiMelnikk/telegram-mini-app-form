import React from 'react';

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
