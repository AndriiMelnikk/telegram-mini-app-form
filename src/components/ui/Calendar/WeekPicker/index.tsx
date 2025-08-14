import React from 'react';
import WeekPickerWrapper from './style';
import { useWeekPicker } from './useWeekPicker';
import { WeekNavigation } from './WeekNavigation';
import { WeekDaysHeader } from './WeekDaysHeader';
import { WeekDays } from './WeekDays';
import dayjs, { Dayjs } from 'dayjs';

type Props = {
  day: Dayjs | null;
  setValue: (newValue: Dayjs | null) => void;
};

export function WeekPickerPlain({ day, setValue }: Props) {
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

  return (
    <WeekPickerWrapper>
      <WeekNavigation
        current={anchor}
        goPrevWeek={goPrevWeek}
        goNextWeek={goNextWeek}
        prevDisabled={prevDisabled}
        nextDisabled={nextDisabled}
      />
      <WeekDaysHeader weekdayShort={weekdayShort} />
      <WeekDays
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
