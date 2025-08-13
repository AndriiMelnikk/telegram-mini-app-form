'use client';

import { Cell, Radio } from '@telegram-apps/telegram-ui';
import s from './style.module.scss';
import { ServiceType } from '@/context/type';

type Props = {
  services: ServiceType[];
  selectedCategory: string | null;
  setSelectedCategory: (id: string | null) => void;
}

export default function BarberTypeSelector({ services, selectedCategory, setSelectedCategory }: Props) {


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
          {service.category}
        </Cell>
      ))}
    </div>
  );
}
