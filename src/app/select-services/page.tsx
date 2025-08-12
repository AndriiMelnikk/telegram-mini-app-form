'use client';

import { Cell, Info, Input, Radio, Tappable, Title } from '@telegram-apps/telegram-ui';
import { MdChevronLeft } from 'react-icons/md';

import s from './styel.module.scss';
import { Page } from '@/components/Page';
import { useState } from 'react';

import { IoIosSearch } from 'react-icons/io';
import PremiumService from '@/components/ui/PremiumService';
import CardChangeBarber from '@/components/ui/CardChangeBarber';

const mock = [
  {
    id: 'user_12345',
    img: 'https://randomuser.me/api/portraits/men/75.jpg',
    job: [
      {
        id: 'job_001',
        title: 'Frontend Developer',
        time: '55 хв',
        price: 3500,
      },
      {
        id: 'job_002',
        title: 'Backend Developer',
        time: '40 хв',
        price: 4000,
      },
    ],
  },
  {
    id: 'user_98765',
    img: 'https://randomuser.me/api/portraits/women/32.jpg',
    job: [
      {
        id: 'job_003',
        title: 'UI/UX Designer',
        time: '40 хв',
        price: 2700,
      },
      {
        id: 'job_004',
        title: 'Project Manager',
        time: '40 хв',
        price: 5000,
      },
    ],
  },
  {
    id: 'user_54321',
    img: 'https://randomuser.me/api/portraits/men/82.jpg',
    job: [
      {
        id: 'job_005',
        title: 'QA Engineer',
        time: '40 хв',
        price: 3000,
      },
    ],
  },
];

export default function Home() {
  const [value, setValue] = useState('');
  return (
    <Page back={true}>
      <div className={s.app_wrapper}>
        <div className={s.header} style={{ backgroundColor: 'var(--tgui--secondary_bg_color)' }}>
          <MdChevronLeft />
          <Info subtitle="проспект Повітряних Сил, 44" type="text">
            Lumberjack Soloma
          </Info>
        </div>

        <div>
          <Title level="2" weight="2">
            Вибір послуг
          </Title>
        </div>

        <div className={s.radio_wrapper}>
          <Cell
            Component="label"
            before={<Radio name="radio" value="1" defaultChecked />}
            multiline
          >
            Молодший барбер
          </Cell>
          <Cell Component="label" before={<Radio name="radio" value="2" />} multiline>
            Барбер
          </Cell>
          <Cell Component="label" before={<Radio name="radio" value="3" />} multiline>
            Додатковов
          </Cell>
        </div>
        <div className={s.search_wrapper}>
          <Input
            placeholder="Пошук ..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            before={
              <Tappable
                Component="div"
                style={{
                  display: 'flex',
                }}
                onClick={() => setValue('')}
              >
                <IoIosSearch />
              </Tappable>
            }
          />
        </div>

        <div className={s.premiumService_wrapper}>
          <PremiumService />
        </div>

        <div className={s.service_wrapper}>
          <div>
            <Title level="3" weight="2">
              Молодший барбер
            </Title>

            <div>
              <CardChangeBarber cards={mock} />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
