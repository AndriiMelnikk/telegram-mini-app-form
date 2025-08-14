'use client';

import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import StyledCalendar from './style';
import { useTheme } from '@mui/material/styles';
import { useSwipeable } from 'react-swipeable';

type CalendarProps = {
  value: dayjs.Dayjs | null;
  setValue: (newValue: dayjs.Dayjs | null) => void;
};

export default function MyCalendar({ value, setValue }: CalendarProps) {
  const [displayMonth, setDisplayMonth] = React.useState(value);

  const theme = useTheme();
  const today = React.useMemo(() => dayjs(), []);

  const goPrevMonth = () => {
    if (!dayjs(displayMonth).isAfter(today, 'month')) return;
    setDisplayMonth(dayjs(displayMonth).subtract(1, 'month'));
  };

  const goNextMonth = () => {
    setDisplayMonth(dayjs(displayMonth).add(1, 'month'));
  };

  React.useEffect(() => {
    setDisplayMonth(value);
  }, [value]);

  const handlers = useSwipeable({
    onSwipedLeft: () => goNextMonth(),
    onSwipedRight: () => goPrevMonth(),
    delta: 50,
    trackTouch: true,
    trackMouse: false,
    rotationAngle: 0,
  });
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
        <div {...handlers} style={{ touchAction: 'pan-y' }}>
          <StyledCalendar
            theme={theme}
            value={displayMonth}
            onChange={setValue}
            minDate={today}
            shouldDisableDate={(date) => date.isBefore(today, 'day')}
            reduceAnimations
          />
        </div>
      </LocalizationProvider>
    </div>
  );
}
