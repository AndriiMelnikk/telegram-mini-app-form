'use client';

import { Button, } from '@telegram-apps/telegram-ui';
import s from './style.module.scss';
import { ServiceType } from '@/context/type';
import { useState } from 'react';

type Props = {
  services: ServiceType[];
  setSelectedCategory: (id: string | null) => void;
};

export default function BarberTypeSelector({
  services,
  setSelectedCategory,
}: Props) {

  const [selected, setSelected] = useState<string | null>(null);

  const handleCategoryChange = (id: string) => {
    setSelected(id);
    setSelectedCategory(id);
  };

  return (
    <div className={s.radio_wrapper}>
      {services.map(service => (
        <Button
          key={service.id}
          size="s"
          mode={selected === service.id ? 'filled' : 'outline'}
          onClick={() => handleCategoryChange(service.id)}
        >
          {service.category}
        </Button>
      ))}
    </div>
  )
}