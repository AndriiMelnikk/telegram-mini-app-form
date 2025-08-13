'use client';

import { Page } from '@/components/Page';
import NavigationCell from '@/components/page/Home/NavigationCell';
import PremiumService from '@/components/ui/PremiumService';
import { IoIosCalendar, IoIosList } from 'react-icons/io';
import { Title, Headline, Section } from '@telegram-apps/telegram-ui';
import s from './style.module.scss';
import useInitState from '@/components/page/Home/hooks/useInitState';
import { StatusReq } from '@/types';
import SpinnerCopmonent from '@/components/ui/Spiner';

export default function HomePage() {
  const { titles, status } = useInitState();

  if (status === StatusReq.pending) {
    return <SpinnerCopmonent page />;
  }
  return (
    <Page back={false}>
      <div className={s.app_wrapper}>
        <Header titles={titles} />
        <PremiumService />
        <Navigation />
      </div>
    </Page>
  );
}

function Header({ titles }: { titles: { title: string; subtitle: string } }) {
  return (
    <div>
      <Title level="1" weight="3">
        {titles.title}
      </Title>
      <Headline weight="3">{titles.subtitle}</Headline>
    </div>
  );
}

function Navigation() {
  return (
    <Section>
      <NavigationCell href="/send-form" icon={<IoIosCalendar />}>
        Вибрати дату
      </NavigationCell>
      <NavigationCell href="/select-services" icon={<IoIosList />}>
        Вибрати послугу
      </NavigationCell>
    </Section>
  );
}
