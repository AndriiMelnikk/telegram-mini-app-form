import { Cell, Checkbox } from '@telegram-apps/telegram-ui';
import s from './cardChangeBarber.module.scss';

import workImg from '@/app/_assets/work.png';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { formatMinutes } from '@/utils/formatMinutes';

type Card = {
  id: string;
  img: string;
  job: {
    id: string;
    title: string;
    time: number;
    price: number;
  }[];
};

type Props = {
  cards: Card[];
  setSelected: (value: any, merge?: boolean) => void
  selected: string[];
};

export default function CardChangeBarber({ cards, setSelected: setValue, selected: value }: Props) {

  const [selected, setSelected] = useState<string[]>(value);

  const toggleCheckbox = (value: string) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    setValue(selected);
  }, [selected]);

  return (
    <div className={s.app_wrapper} onClick={() => console.log('Card clicked')}>
      {cards.map((card) => {
        return (
          <div key={card.id} className={s.card_wrapper}>
            <div className={s.img_wrapper}>
              <Image src={workImg} alt={card.img} />
            </div>
            <div>
              {card.job.map((work) => {
                return (
                  <div key={work.id}>
                    <Cell
                      Component="label"
                      after={<Checkbox name="checkbox" value={work.id} checked={selected.includes(work.id)}
                        onChange={() => toggleCheckbox(work.id)} />}
                      subtitle={formatMinutes(work.time)}
                      multiline
                      description={work.price + ' ₴'}
                    >
                      {work.title}
                    </Cell>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
