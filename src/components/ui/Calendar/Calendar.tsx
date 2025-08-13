'use client';

import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { styled } from '@mui/material/styles';

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

type CalendarProps = {
    value: dayjs.Dayjs | null;
    setValue: (newValue: dayjs.Dayjs | null) => void;
};

export default function MyCalendar({ value, setValue }: CalendarProps) {
 
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
            <div >
                <StyledCalendar
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                />
            </div>
        </LocalizationProvider>
    );
}
