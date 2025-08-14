import React from 'react';
import WeekPickerWrapper from './style';
import { useWeekPicker } from './useWeekPicker';
import { WeekNavigation } from './WeekNavigation';
import { WeekDaysHeader } from './WeekDaysHeader';
import { WeekDays } from './WeekDays';
import dayjs, { Dayjs } from 'dayjs';
import { useSwipeable } from 'react-swipeable';

type Props = {
  day: Dayjs | null;
  setValue: (newValue: Dayjs | null) => void;
  setMiniCalendar: (value: boolean) => void;
};

export function WeekPickerPlain({ day, setValue, setMiniCalendar }: Props) {
  const {
    anchor,
    days,
    weekdayShort,
    setAnchor,
    goPrevWeek,
    goNextWeek,
    prevDisabled,
    nextDisabled,
    isDateDisabled,
  } = useWeekPicker({});

  const handlers = useSwipeable({
    onSwipedLeft: () => goNextWeek(),
    onSwipedRight: () => goPrevWeek(),
    delta: 50,
    trackTouch: true,
    trackMouse: false,
    rotationAngle: 0,
  });

  return (
    <WeekPickerWrapper>
      <WeekNavigation
        current={anchor}
        goPrevWeek={goPrevWeek}
        goNextWeek={goNextWeek}
        prevDisabled={prevDisabled}
        nextDisabled={nextDisabled}
        setMiniCalendar={setMiniCalendar}
      />
      <WeekDaysHeader weekdayShort={weekdayShort} />
      <WeekDays
        {...handlers}
        days={days}
        setAnchor={setAnchor}
        isDateDisabled={isDateDisabled}
        day={day}
        setValue={setValue}
      />
    </WeekPickerWrapper>
  );
}

export default WeekPickerPlain;
