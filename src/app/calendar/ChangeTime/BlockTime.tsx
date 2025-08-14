'use client';

import { Accordion, Button } from '@telegram-apps/telegram-ui';
import AccordionSummary from '@mui/material/AccordionSummary';
import { AccordionContent } from '@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionContent/AccordionContent';
import { useState } from 'react';

import s from './style.module.scss';

type Props = {
  header: string;
  time: string[];
  selectedTime: string | null;
  setSelectedTime: (time: string | null) => void;
};

const BlockTime = ({ header, time, selectedTime, setSelectedTime }: Props) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <Accordion onChange={() => ''} expanded={expanded}>
      <AccordionSummary onClick={() => setExpanded(!expanded)}>{header}</AccordionSummary>
      <AccordionContent>
        <div className={s.time_wrapper}>
          {time.map((item, index) => (
            <Button
              key={index}
              mode={selectedTime === item ? 'bezeled' : 'outline'}
              onClick={() => setSelectedTime(selectedTime === item ? null : item)}
            >
              {item}
            </Button>
          ))}
        </div>
      </AccordionContent>
    </Accordion>
  );
};

export default BlockTime;
