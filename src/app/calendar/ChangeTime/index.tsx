'use client';

import { useState } from 'react';
import BlockTime from './BlockTime';
import { useTimeServiceContext } from '@/context/TimeServiceContext';
import splitTimesByPeriod from '@/utils/splitTimesByPeriod';

type Props = {
  freeTime: string[];
}
export default function ChangeTime({ freeTime }: Props) {
  const { value, setValue } = useTimeServiceContext();
  const [selectedTime, setSelectedTime] = useState<string | null>(value.time || null);

  const handleTimeChange = (time: string | null) => {
    setSelectedTime(time);
    setValue({ ...value, time });
  };

  const splitFreeTime = splitTimesByPeriod(freeTime);

  return (
    <div>
      <BlockTime
        selectedTime={selectedTime}
        setSelectedTime={handleTimeChange}
        header="Ранок"
        time={splitFreeTime.morning}
      />
      <BlockTime
        selectedTime={selectedTime}
        setSelectedTime={handleTimeChange}
        header="День"
        time={splitFreeTime.day}
      />
      <BlockTime
        selectedTime={selectedTime}
        setSelectedTime={handleTimeChange}
        header="Вечір"
        time={splitFreeTime.evening}
      />
    </div>
  );
}
