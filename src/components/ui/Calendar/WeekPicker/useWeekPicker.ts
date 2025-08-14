import { useState, useMemo, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(isoWeek);
dayjs.extend(localeData);

// useWeekPicker.ts
export type UseWeekPickerProps = {
  value?: Dayjs;
  defaultValue?: Dayjs;
  onChange?: (range: any) => void;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  shouldDisableDate?: (date: Dayjs) => boolean;
  weekStartsOnMonday?: boolean;
  locale?: string;
  disabled?: boolean;
};

export function useWeekPicker({
  value,
  defaultValue,

  onChange,
  minDate,
  maxDate,
  shouldDisableDate,
  weekStartsOnMonday = true,
  locale = 'uk',
  disabled = false,
}: UseWeekPickerProps) {
  // локаль
  useEffect(() => {
    dayjs.locale(locale);
  }, [locale]);

  const today = dayjs();
  const startOfCurrentWeek = weekStartsOnMonday ? today.startOf('isoWeek') : today.startOf('week');

  const isControlled = value != null;
  const [internalAnchor, setInternalAnchor] = useState<Dayjs>(
    (value ?? defaultValue ?? today).clone()
  );

  const anchor = isControlled ? (value as Dayjs) : internalAnchor;

  const startOfWeek = weekStartsOnMonday ? anchor.startOf('isoWeek') : anchor.startOf('week');
  const days = useMemo(
    () => Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, 'day')),
    [startOfWeek]
  );

  const weekdayShort = useMemo(() => {
    const wd = dayjs.weekdaysMin().map((d) => d[0]);
    return weekStartsOnMonday ? [...wd.slice(1), wd[0]] : wd;
  }, [weekStartsOnMonday, locale]);

  const callOnChange = (nextAnchor: Dayjs) => {
    onChange?.({
      start: weekStartsOnMonday ? nextAnchor.startOf('isoWeek') : nextAnchor.startOf('week'),
      end: weekStartsOnMonday ? nextAnchor.endOf('isoWeek') : nextAnchor.endOf('week'),
      anchor: nextAnchor,
    });
  };

  const setAnchor = (next: Dayjs) => {
    if (!isControlled) setInternalAnchor(next);
    callOnChange(next);
  };

  const inRange = (date: Dayjs) => {
    if (minDate && date.isBefore(minDate, 'day')) return false;
    if (maxDate && date.isAfter(maxDate, 'day')) return false;
    return true;
  };

  const isDateDisabled = (date: Dayjs) =>
    !!shouldDisableDate?.(date) || !inRange(date) || disabled || date.isBefore(today, 'day'); // <- блокування днів менших за сьогодні

  // Навігація
  const goPrevWeek = () => setAnchor(anchor.subtract(1, 'week'));
  const goNextWeek = () => setAnchor(anchor.add(1, 'week'));

  const prevWeekStart = startOfWeek.subtract(1, 'week');
  const nextWeekStart = startOfWeek.add(1, 'week');

  const prevDisabled =
    disabled ||
    anchor.isSame(startOfCurrentWeek, 'week') ||
    (minDate ? prevWeekStart.endOf('week').isBefore(minDate, 'day') : false) ||
    (maxDate ? prevWeekStart.isAfter(maxDate, 'day') : false);

  const nextDisabled =
    disabled ||
    (minDate ? nextWeekStart.endOf('week').isBefore(minDate, 'day') : false) ||
    (maxDate ? nextWeekStart.isAfter(maxDate, 'day') : false);

  return {
    anchor,
    days,
    weekdayShort,
    setAnchor,
    goPrevWeek,
    goNextWeek,
    prevDisabled,
    nextDisabled,
    isDateDisabled,
  };
}
