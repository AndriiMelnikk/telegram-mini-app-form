export function add30Minutes(time: string): string {
  let [hours, minutes] = time.split(':').map(Number);

  minutes += 30;
  if (minutes >= 60) {
    minutes -= 60;
    hours += 1;
  }
  if (hours >= 24) {
    hours -= 24;
  }

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}
