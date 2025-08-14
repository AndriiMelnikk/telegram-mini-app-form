'use client';

import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import StyledCalendar from './style';
import { useTheme } from '@mui/material/styles';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';

type CalendarProps = {
  value: dayjs.Dayjs | null;
  setValue: (newValue: dayjs.Dayjs | null) => void;
};
export default function MyCalendar({ value, setValue }: CalendarProps) {
  const [compact, setCompact] = React.useState(false);

  const theme = useTheme();
  const today = dayjs();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
      <div>
        <StyledCalendar
          theme={theme}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          minDate={today}
          shouldDisableDate={(date) => date.isBefore(today, 'day')}
          onViewChange={() => setCompact(!compact)} // клік на заголовок місяць/рік
        />
      </div>
    </LocalizationProvider>
  );
}
