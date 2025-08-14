import { useTheme } from '@mui/material/styles';
import dayjs from 'dayjs';
import StyledCalendar from './style';
import { useSwipeable } from 'react-swipeable';

type CalendarProps = {
  setDisplayMonth: any;
  displayMonth: any;
  setValue: any;
  today: any;
  setMiniCalendar: any;
};

const FullCalendar = ({ displayMonth, setValue, today, setDisplayMonth, setMiniCalendar }: CalendarProps) => {
  const theme = useTheme();

  const goPrevMonth = () => {
    if (!dayjs(displayMonth).isAfter(today, 'month')) return;
    setDisplayMonth(dayjs(displayMonth).subtract(1, 'month'));
  };

  const goNextMonth = () => {
    setDisplayMonth(dayjs(displayMonth).add(1, 'month'));
  };

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
      <div {...handlers} style={{ touchAction: 'pan-y' }}>
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
    </div>
  );
};

export default FullCalendar;
