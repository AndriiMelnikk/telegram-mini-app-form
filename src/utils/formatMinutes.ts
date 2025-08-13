export function formatMinutes(minutes: number): string {
  if (minutes <= 0) return '0 хв.';

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  let result = '';
  if (hours > 0) {
    result += `${hours} год.`;
  }
  if (mins > 0) {
    if (hours > 0) result += ' ';
    result += `${mins} хв.`;
  }

  return result;
}
