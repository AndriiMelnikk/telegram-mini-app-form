export function formatDateUA(dateStr: string): string {
  const date = new Date(dateStr);

  const weekdays = [
    'Неділя',
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    'П’ятниця',
    'Субота',
  ];

  const months = [
    'січня',
    'лютого',
    'березня',
    'квітня',
    'травня',
    'червня',
    'липня',
    'серпня',
    'вересня',
    'жовтня',
    'листопада',
    'грудня',
  ];

  const dayOfWeek = weekdays[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];

  return `${dayOfWeek}, ${day} ${month}`;
}

