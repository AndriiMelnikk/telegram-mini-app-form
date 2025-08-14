import { useTheme } from '@mui/material/styles';
import dayjs from 'dayjs';
import StyledCalendar from './style';
import { useSwipeable } from 'react-swipeable';
import { useState } from 'react';

type CalendarProps = {
  setDisplayMonth: any;
  displayMonth: any;
  setValue: any;
  today: any;
  setMiniCalendar: any;
};

const FullCalendar = ({ displayMonth, setValue, today, setDisplayMonth, setMiniCalendar }: CalendarProps) => {
  const theme = useTheme();
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('left');

  const goPrevMonth = () => {
    if (!dayjs(displayMonth).isAfter(today, 'month')) return;
    setDirection('right');
    setAnimating(true);
  };

  const goNextMonth = () => {
    setDirection('left');
    setAnimating(true);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goNextMonth(),
    onSwipedRight: () => goPrevMonth(),
    delta: 50,
    trackTouch: true,
    trackMouse: false,
    rotationAngle: 0,
  });

  const handleTransitionEnd = () => {
    setAnimating(false);
    if (direction === 'left') setDisplayMonth(dayjs(displayMonth).add(1, 'month'));
    if (direction === 'right') setDisplayMonth(dayjs(displayMonth).subtract(1, 'month'));
  };

  // Обчислюємо значення для анімації
  const transformValue = animating
    ? direction === 'left'
      ? '-100%'
      : '100%'
    : '0';

  return (
    <div {...handlers} style={{ overflow: 'hidden', position: 'relative', width: 360 }}>
      <div
        style={{
          display: 'flex',
          width: '200%',
          transform: `translateX(${transformValue})`,
          transition: animating ? 'transform 0.3s ease' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Поточний місяць */}
        <div style={{ width: '50%' }}>
          <StyledCalendar
            theme={theme}
            value={displayMonth}
            onChange={setValue}
            minDate={today}
            shouldDisableDate={(date) => date.isBefore(today, 'day')}
            reduceAnimations
            onViewChange={() => setMiniCalendar(true)}
          />
        </div>

        {/* Наступний/попередній місяць */}
        <div style={{ width: '50%' }}>
          <StyledCalendar
            theme={theme}
            value={
              direction === 'left'
                ? dayjs(displayMonth).add(1, 'month')
                : dayjs(displayMonth).subtract(1, 'month')
            }
            onChange={setValue}
            minDate={today}
            shouldDisableDate={(date) => date.isBefore(today, 'day')}
            reduceAnimations
            onViewChange={() => setMiniCalendar(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default FullCalendar;
