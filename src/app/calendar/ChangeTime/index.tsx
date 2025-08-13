'use client';

import { useState } from 'react';
import BlockTime from './BlockTime';

export default function ChangeTime() {

    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    return (
        <div>
            <BlockTime selectedTime={selectedTime} setSelectedTime={setSelectedTime} header="Ранок" time={['08:00', '09:00', '10:00', '11:00', '12:00']} />
            <BlockTime selectedTime={selectedTime} setSelectedTime={setSelectedTime} header="День" time={['13:00', '14:00', '15:00', '16:00']} />
            <BlockTime selectedTime={selectedTime} setSelectedTime={setSelectedTime} header="Вечір" time={['17:00', '18:00', '19:00', '20:00']} />
        </div>
    );
}
