import { Cell, Checkbox } from '@telegram-apps/telegram-ui';
import s from './cardChangeBarber.module.scss';

import workImg from '@/app/_assets/work.png';

import Image from 'next/image';

type Card = {
  id: string;
  img: string;
  job: {
    id: string;
    title: string;
    time: string;
    price: number;
  }[];
};

type Props = {
  cards: Card[];
};

export default function CardChangeBarber({ cards }: Props) {
  return (
    <div className={s.app_wrapper}>
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
                      after={<Checkbox name="checkbox" value="1" />}
                      subtitle={work.time}
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
