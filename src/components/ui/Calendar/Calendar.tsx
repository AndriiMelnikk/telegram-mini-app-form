'use client';

import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import FullCalendar from './FulCalendar';
import WeekPicker from './WeekPicker';

type CalendarProps = {
  value: dayjs.Dayjs | null;
  setValue: (newValue: dayjs.Dayjs | null) => void;
};

export default function MyCalendar({ value, setValue }: CalendarProps) {
  const [displayMonth, setDisplayMonth] = React.useState(value);

  React.useEffect(() => {
    setDisplayMonth(value);
  }, [value]);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
        <WeekPicker />
        <FullCalendar
          displayMonth={displayMonth}
          setDisplayMonth={setDisplayMonth}
          today={dayjs()}
          setValue={setValue}
        />
      </LocalizationProvider>
    </div>
  );
}
