'use client';

import { useState } from 'react';
import BlockTime from './BlockTime';
import { useTimeServiceContext } from '@/context/TimeServiceContext';

export default function ChangeTime() {

    const { value, setValue } = useTimeServiceContext();
    const [selectedTime, setSelectedTime] = useState<string | null>(value.time || null);


    const handleTimeChange = (time: string | null) => {
        setSelectedTime(time);
        setValue({ ...value, time });
    };


    return (
        <div>
            <BlockTime selectedTime={selectedTime} setSelectedTime={handleTimeChange} header="Ранок" time={['08:00', '09:00', '10:00', '11:00', '12:00']} />
            <BlockTime selectedTime={selectedTime} setSelectedTime={handleTimeChange} header="День" time={['13:00', '14:00', '15:00', '16:00']} />
            <BlockTime selectedTime={selectedTime} setSelectedTime={handleTimeChange} header="Вечір" time={['17:00', '18:00', '19:00', '20:00']} />
        </div>
    );
}
