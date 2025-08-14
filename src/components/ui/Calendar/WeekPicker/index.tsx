
import React from 'react';
import WeekPickerWrapper from './style';
import { useWeekPicker } from './useWeekPicker';
import { WeekNavigation } from './WeekNavigation';
import { WeekDaysHeader } from './WeekDaysHeader';
import { WeekDays } from './WeekDays';


export function WeekPickerPlain(props: any) {
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
  } = useWeekPicker(props);

  return (
    <WeekPickerWrapper>
      <WeekNavigation current={anchor} goPrevWeek={goPrevWeek} goNextWeek={goNextWeek} prevDisabled={prevDisabled} nextDisabled={nextDisabled} />
      <WeekDaysHeader weekdayShort={weekdayShort} />
      <WeekDays days={days} anchor={anchor} setAnchor={setAnchor} isDateDisabled={isDateDisabled} />
    </WeekPickerWrapper>
  );
}

export default WeekPickerPlain;
