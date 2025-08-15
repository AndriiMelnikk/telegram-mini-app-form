import Calendar from '@/components/ui/Calendar';
import { darkTheme, lightTheme } from '@/components/ui/Calendar/theme';
import { useTimeServiceContext } from '@/context/TimeServiceContext';
import { ThemeProvider } from '@emotion/react';
import { miniApp, useSignal } from '@telegram-apps/sdk-react';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useState } from 'react';

const CalendarBlock = () => {
  const isDark = useSignal(miniApp.isDark);
  const { value, setValue } = useTimeServiceContext();

  const initialDate = value.date ? dayjs(value.date) : dayjs();

  const [data, setData] = useState<dayjs.Dayjs>(initialDate);

  const handleTimeChange = (day: dayjs.Dayjs | null) => {
    if (!day) return;
    setData(day);
    setValue({ ...value, date: day.format('YYYY-MM-DD') });
  };

  useEffect(() => {
    setValue({ ...value, date: dayjs().format('YYYY-MM-DD') });
  }, []);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Calendar value={data} setValue={handleTimeChange} />
    </ThemeProvider>
  );
};

export default CalendarBlock;
