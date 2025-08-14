// WeekPickerPlain.tsx
import React, { useState, useEffect, useMemo } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/uk';
import WeekPickerWrapper from './weekPicker.style';
import { ArrowDropDownIcon, ArrowLeftIcon, ArrowRightIcon } from '@mui/x-date-pickers';

dayjs.extend(isoWeek);
dayjs.extend(localeData);
dayjs.locale('uk');

export type WeekRange = {
  start: Dayjs;
  end: Dayjs;
  anchor: Dayjs;
};

export type WeekPickerProps = {
  value?: Dayjs;
  defaultValue?: Dayjs;
  onChange?: (range: WeekRange) => void;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  shouldDisableDate?: (date: Dayjs) => boolean;
  weekStartsOnMonday?: boolean;
  locale?: string;
  disabled?: boolean;
};

function getStartOfWeek(date: Dayjs, monday: boolean) {
  return monday ? date.startOf('isoWeek') : date.startOf('week');
}

function getEndOfWeek(date: Dayjs, monday: boolean) {
  return monday ? date.endOf('isoWeek') : date.endOf('week');
}

function inRange(date: Dayjs, minDate?: Dayjs, maxDate?: Dayjs) {
  if (minDate && date.isBefore(minDate, 'day')) return false;
  if (maxDate && date.isAfter(maxDate, 'day')) return false;
  return true;
}

export function WeekPickerPlain({
  value,
  defaultValue,
  onChange,
  minDate,
  maxDate,
  shouldDisableDate,
  weekStartsOnMonday = true,
  locale = 'uk',
  disabled = false,
}: WeekPickerProps) {
  useEffect(() => {
    dayjs.locale(locale);
  }, [locale]);

  const today = dayjs();
  const startOfCurrentWeek = getStartOfWeek(today, weekStartsOnMonday);

  const isControlled = value != null;
  const [internalAnchor, setInternalAnchor] = useState<Dayjs>(
    (value ?? defaultValue ?? dayjs()).clone()
  );

  const anchor = isControlled ? (value as Dayjs) : internalAnchor;
  const start = getStartOfWeek(anchor, weekStartsOnMonday);
  const days = useMemo(() => Array.from({ length: 7 }, (_, i) => start.add(i, 'day')), [start]);

  const weekdayShort = useMemo(() => {
    const wd = dayjs.weekdaysMin().map((d) => d[0]);
    return weekStartsOnMonday ? [...wd.slice(1), wd[0]] : wd;
  }, [weekStartsOnMonday, locale]);

  const callOnChange = (nextAnchor: Dayjs) => {
    onChange?.({
      start: getStartOfWeek(nextAnchor, weekStartsOnMonday),
      end: getEndOfWeek(nextAnchor, weekStartsOnMonday),
      anchor: nextAnchor,
    });
  };

  const setAnchor = (next: Dayjs) => {
    if (!isControlled) setInternalAnchor(next);
    callOnChange(next);
  };

  const goPrevWeek = () => setAnchor(anchor.subtract(1, 'week'));
  const goNextWeek = () => setAnchor(anchor.add(1, 'week'));
  const goToday = () => setAnchor(dayjs());

  // Перевірка, чи можна гортати назад/вперед
  const prevWeekStart = getStartOfWeek(anchor.subtract(1, 'week'), weekStartsOnMonday);
  const prevWeekEnd = getEndOfWeek(anchor.subtract(1, 'week'), weekStartsOnMonday);
  const nextWeekStart = getStartOfWeek(anchor.add(1, 'week'), weekStartsOnMonday);
  const nextWeekEnd = getEndOfWeek(anchor.add(1, 'week'), weekStartsOnMonday);

  // Забороняємо йти назад, якщо поточний тиждень
  const prevDisabled =
    disabled ||
    anchor.isSame(startOfCurrentWeek, 'week') || // <- блокування назад
    (minDate ? prevWeekEnd.isBefore(minDate, 'day') : false) ||
    (maxDate ? prevWeekStart.isAfter(maxDate, 'day') : false);

  const nextDisabled =
    disabled ||
    (minDate ? nextWeekEnd.isBefore(minDate, 'day') : false) ||
    (maxDate ? nextWeekStart.isAfter(maxDate, 'day') : false);
  return (
    <WeekPickerWrapper>
      <div className="navigation">
        <div className="navigation-title">
          <b>{(value ?? anchor).format('MMMM YYYY')}</b>
          <span>
            <ArrowDropDownIcon fontSize="small" />
          </span>
        </div>
        <div className="navigation-arrows">
          <button onClick={goPrevWeek} disabled={prevDisabled}>
            <ArrowLeftIcon fontSize="inherit" />
          </button>
          <button onClick={goNextWeek}>
            <ArrowRightIcon fontSize="inherit" />
          </button>
        </div>
      </div>

      <div className="weekdays">
        {weekdayShort.map((label: string) => (
          <div key={label.toString()} className="daysDiv">
            <div key={label} className="weekday">
              {label}
            </div>
          </div>
        ))}
      </div>

      <div className="days">
        {days.map((date: dayjs.Dayjs) => {
          const isToday = date.isSame(dayjs(), 'day');
          const isOutOfRange = !inRange(date, minDate, maxDate);
          const isDisabled = !!shouldDisableDate?.(date) || isOutOfRange || disabled;
          const isSelectedWeek = date.isSame(anchor, 'week') || date.isSame(anchor, 'isoWeek');

          return (
            <div key={date.toString()} className="daysDiv">
              <button
                onClick={() => !isDisabled && setAnchor(date)}
                disabled={isDisabled}
                className={`dayButton ${isToday ? 'today' : ''} ${
                  isSelectedWeek ? 'selected' : ''
                }`}
              >
                {date.date()}
              </button>
            </div>
          );
        })}
      </div>
    </WeekPickerWrapper>
  );
}

export default WeekPickerPlain;
