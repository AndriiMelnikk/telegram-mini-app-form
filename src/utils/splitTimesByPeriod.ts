function splitTimesByPeriod(times: string[]) {
  const result: { morning: string[]; day: string[]; evening: string[] } = {
    morning: [],
    day: [],
    evening: [],
  };

  times.forEach((time) => {
    const [hour] = time.split(':').map(Number);

    if (hour >= 6 && hour < 12) {
      result.morning.push(time);
    } else if (hour >= 12 && hour < 18) {
      result.day.push(time);
    } else {
      result.evening.push(time);
    }
  });

  return result;
}

export default splitTimesByPeriod;
