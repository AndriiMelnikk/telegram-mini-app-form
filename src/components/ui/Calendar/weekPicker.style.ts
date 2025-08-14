import { styled } from '@mui/material/styles';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const WeekPickerWrapper = styled('div')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  boxShadow: theme.shadows[1],
  width: 'calc(100% + 40px)',
  marginLeft: '-20px',

  '& .navigation': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    marginBottom: theme.spacing(1),

    '& .navigation-arrows': {
      display: 'flex',
      justifyContent: 'end',

      '& svg': {
        width: 24,
        height: 24,
      },
    },

    '& .navigation-title': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',

      '& span': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
        height: '34px',
        width: '34px',
        marginLeft: '5px',
        borderRadius: '50%',
        '&:hover': {
          background: theme.palette.action.hover,
          cursor: 'pointer',
        },
      },
    },

    '& button': {
      color: theme.palette.primary.light,
      border: 'none',
      padding: '4px 8px',
      borderRadius: theme.shape.borderRadius,
      cursor: 'pointer',
      '&:disabled': {
        color: theme.palette.action.disabled,
        cursor: 'default',
      },
    },
  },

  '& .weekdays': {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
    color: theme.palette.text.secondary,
  },

  '& .weekday': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    maxWidth: '36px',
    height: '36px',
    fontSize: '18px',
  },

  '& .days': {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',

    '& .daysDiv': {
      display: 'flex',
      justifyContent: 'center',
      width: '36px',
      maxWidth: '36px',
      height: '36px',
      fontSize: '14px',
    },

    '& .dayButton': {
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'transparent',
      color: theme.palette.text.primary,
      '&:hover': {
        background: theme.palette.action.hover,
      },
    },

    '& .today': {
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    },

    '& .selected': {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
}));

export default WeekPickerWrapper;
