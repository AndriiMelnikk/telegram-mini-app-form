'use client';

import { Cell, Radio } from '@telegram-apps/telegram-ui';
import s from './style.module.scss';
import useServices from './hocks/useServices';
import { useEffect, useState } from 'react';

export default function BarberTypeSelector() {
  const { services } = useServices();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (services.length > 0 && selectedCategory === null) {
      setSelectedCategory(services[0].id);
    }
  }, [services]);

  return (
    <div className={s.radio_wrapper}>
      {services.map((service, index) => (
        <Cell
          key={service.id}
          Component="label"
          before={
            <Radio
              name="radio"
              value={index.toString()}
              checked={selectedCategory === service.id}
              onChange={() => setSelectedCategory(service.id)}
            />
          }
          multiline
        >
          {service.id}
        </Cell>
      ))}
    </div>
  );
}
