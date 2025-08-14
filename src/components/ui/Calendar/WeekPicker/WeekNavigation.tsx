// WeekNavigation.tsx
import React from 'react';
import { ArrowDropDownIcon, ArrowLeftIcon, ArrowRightIcon } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
dayjs.locale('uk')

type Props = {
  current: Dayjs;
  goPrevWeek: () => void;
  goNextWeek: () => void;
  prevDisabled: boolean;
  nextDisabled: boolean;
  setMiniCalendar: (value: boolean) => void;
};

export const WeekNavigation = ({
  current,
  goPrevWeek,
  goNextWeek,
  prevDisabled,
  nextDisabled,
  setMiniCalendar
}: Props) => (
  <div className="navigation">
    <div className="navigation-title" onClick={() => setMiniCalendar(false)}>
      <b>{current.format('MMMM YYYY')}</b>
      <span>
        <ArrowDropDownIcon fontSize="small" />
      </span>
    </div>
    <div className="navigation-arrows">
      <button onClick={goPrevWeek} disabled={prevDisabled}>
        <ArrowLeftIcon fontSize="inherit" />
      </button>
      <button onClick={goNextWeek} disabled={nextDisabled}>
        <ArrowRightIcon fontSize="inherit" />
      </button>
    </div>
  </div>
);
