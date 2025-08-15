import dayjs from 'dayjs';

function dateTimeToTimestamp({ date, time }: {date: string | null, time: string | null}) {
  return dayjs(`${date} ${time}`, 'YYYY-MM-DD HH:mm').valueOf();
}

export default dateTimeToTimestamp;