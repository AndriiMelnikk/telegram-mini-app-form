'use client';

import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import StyledCalendar from './style';
import { useTheme } from '@mui/material/styles';

type CalendarProps = {
  value: dayjs.Dayjs | null;
  setValue: (newValue: dayjs.Dayjs | null) => void;
};
export default function MyCalendar({ value, setValue }: CalendarProps) {
  const [compact, setCompact] = React.useState(false);
  const [currentMonth, setCurrentMonth] = React.useState(dayjs()); // керує відображуваним місяцем
  const touchStartX = React.useRef<number | null>(null);

  const theme = useTheme();
  const today = dayjs();

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const swipeThreshold = 50; // мінімальна довжина свайпу в px

    if (deltaX > swipeThreshold) {
      // свайп вправо — попередній місяць
      setCurrentMonth((prev) => prev.subtract(1, 'month'));
    } else if (deltaX < -swipeThreshold) {
      // свайп вліво — наступний місяць
      setCurrentMonth((prev) => prev.add(1, 'month'));
    }

    touchStartX.current = null;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
      <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <StyledCalendar
          theme={theme}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          minDate={today}
          shouldDisableDate={(date) => date.isBefore(today, 'day')}
          onViewChange={() => setCompact(!compact)}
          referenceDate={currentMonth} // важливо: цей проп керує відображенням місяця у MUI X DateCalendar
        />
      </div>
    </LocalizationProvider>
  );
}
