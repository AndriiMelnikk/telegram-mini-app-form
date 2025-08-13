import { Cell, Checkbox, Title } from '@telegram-apps/telegram-ui';
import s from './cardChangeBarber.module.scss';

import workImg from '@/app/_assets/work.png';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { formatMinutes } from '@/utils/formatMinutes';
import { ServiceType } from '@/context/type';
import { useSelectServiceContext } from '@/context/SelectServiceContext';


type Props = {
  cards: ServiceType[];
  setSectionRef: (id: string, el: HTMLDivElement | null) => void;
};

export default function CardChangeBarber({ cards, setSectionRef }: Props) {
  const { value, setValue } = useSelectServiceContext();
  const [selected, setSelected] = useState<string[]>(value);

  const toggleCheckbox = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    setSelected(value);
  }, [value]);

  useEffect(() => {
    setValue(selected);
  }, [selected]);

  console.log('value:', value, selected);

  return (
    <div className={s.app_wrapper} onClick={() => console.log('Card clicked')}>
      {cards.map((card) => {
        return (
          <div key={card.id} ref={(el) => setSectionRef(card.id, el)}>
            <Title level="3" weight="2" className={s.title}>
              {card.category}
            </Title>

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
                        after={
                          <Checkbox
                            name="checkbox"
                            value={work.id}
                            checked={selected.includes(work.id)}
                            onChange={() => toggleCheckbox(work.id)}
                          />
                        }
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
          </div>
        );
      })}
    </div>
  );
}
