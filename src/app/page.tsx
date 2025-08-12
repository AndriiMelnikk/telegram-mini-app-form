'use client';

import { Page } from '@/components/Page';

import { IoIosCalendar, IoIosList } from 'react-icons/io';

import s from './styel.module.scss';

import { Cell, Headline, IconContainer, Section, Title } from '@telegram-apps/telegram-ui';

import { MdChevronRight } from 'react-icons/md';
import Link from 'next/link';

import PremiumService from '@/components/ui/PremiumService';

export default function Home() {
  return (
    <Page back={false}>
      <div className={s.app_wrapper}>
        <div>
          <Title level="1" weight="3">
            Lumberjack Soloma
          </Title>

          <Headline weight="3">проспект Повітряних Сил, 44</Headline>
        </div>

        <div>
          <PremiumService />
        </div>

        <div>
          <Section>
            <Link href="/select-services">
              <Cell
                before={
                  <IconContainer>
                    <IoIosCalendar />
                  </IconContainer>
                }
                after={
                  <IconContainer>
                    <MdChevronRight />
                  </IconContainer>
                }
              >
                Вибрати дату
              </Cell>
            </Link>

            <Link href="/select-services">
              <Cell
                before={
                  <IconContainer>
                    <IoIosList />
                  </IconContainer>
                }
                after={
                  <IconContainer>
                    <MdChevronRight />
                  </IconContainer>
                }
              >
                Вибрати послугу
              </Cell>
            </Link>
          </Section>
        </div>
      </div>
    </Page>
  );
}
