'use client';

import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { styled } from '@mui/material/styles';
import { useState, useRef } from 'react';

const StyledCalendar = styled(DateCalendar)(({ theme }) => ({
    '& .MuiDayCalendar-weekDayLabel': {
        fontWeight: 400,
        fontSize: '14px',
        color: theme.palette.text.secondary,
    },
    '& .MuiPickersDay-root': {
        fontWeight: 400,
        borderRadius: '50%',
    },
    '& .Mui-selected': {
        backgroundColor: theme.palette.primary.main + ' !important',
        color: '#fff',
    },
    '& .MuiPickersDay-root:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? '#444' : '#e0e0e0',
    },
    '& .MuiPickersCalendarHeader-label': {
        fontSize: '16px',
        fontWeight: 500,
        color: theme.palette.text.primary,
    },
    '& .MuiPickersArrowSwitcher-button': {
        color: theme.palette.text.primary,
    },
}));

export default function MyCalendar() {
    const [value, setValue] = useState<dayjs.Dayjs | null>(dayjs());
    const [month, setMonth] = useState<dayjs.Dayjs>(dayjs());
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.changedTouches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX;

        if (touchStartX.current !== null && touchEndX.current !== null) {
            const deltaX = touchStartX.current - touchEndX.current;

            if (Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    setMonth((prev) => prev.add(1, 'month'));
                } else {
                    setMonth((prev) => prev.subtract(1, 'month'));
                }
            }
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
            <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <StyledCalendar
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    referenceDate={month}
                />
            </div>
        </LocalizationProvider>
    );
}
