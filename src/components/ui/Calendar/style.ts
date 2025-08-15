import styled from '@emotion/styled';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Theme } from '@mui/material/styles';

const StyledCalendar = styled(DateCalendar)(({ theme }: { theme: Theme }) => ({
  maxWidth: 'calc(100% + 40px)',
  width: 'calc(100% + 40px)',
  paddingRight: '0px',
  maxHeight: 'none',

  padding: '0 16px',
  marginLeft: '-20px',
  // boxShadow: '0 4px 6px -2px rgba(0, 0, 0, 0.15)',
  borderBottomLeftRadius: '20px',
  borderBottomRightRadius: '20px',

  '& .MuiPickersCalendarHeader-root': {
    padding: '8px 0',
  },
  '& .MuiPickersCalendarHeader-label': {
    fontSize: '16px',
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  '& .MuiPickersArrowSwitcher-button': {
    color: theme.palette.text.primary,
    '&:hover': {
      background: theme.palette.action.hover,
    },
  },

  '& .MuiDayCalendar-monthContainer': {
    // boxShadow: theme.shadows[1],

    '> *': {
      margin: '10px 0',
      justifyContent: 'space-between',
    },
  },

  '& .MuiDayCalendar-header': {
    justifyContent: 'space-between',
  },

  '& .MuiDayCalendar-weekDayLabel': {
    fontWeight: 500,
    fontSize: '14px',
    color: theme.palette.text.secondary,
  },

  '& .MuiPickersDay-root': {
    fontWeight: 400,
    borderRadius: '8px',
    transition: 'all 0.2s ease',
  },
  '& .MuiPickersDay-root:hover': {
    backgroundColor: theme.palette.action.hover,
    borderRadius: '50%',
  },

  '& .Mui-selected': {
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: '#fff',
    fontWeight: 600,
    borderRadius: '50%',
  },

  '& .MuiPickersDay-today': {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '50%',
  },
}));

export default StyledCalendar;
