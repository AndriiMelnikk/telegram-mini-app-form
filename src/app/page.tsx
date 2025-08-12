import { Page } from '@/components/Page';
import NavigationCell from '@/components/page/Home/NavigationCell';
import PremiumService from '@/components/ui/PremiumService';
import { IoIosCalendar, IoIosList } from 'react-icons/io';
import { Title, Headline, Section } from '@telegram-apps/telegram-ui';
import s from './style.module.scss';

export default function HomePage() {
  return (
    <Page back={false}>
      <div className={s.app_wrapper}>
        <Header />
        <PremiumService />
        <Navigation />
      </div>
    </Page>
  );
}

function Header() {
  return (
    <div>
      <Title level="1" weight="3">
        Lumberjack Soloma
      </Title>
      <Headline weight="3">проспект Повітряних Сил, 44</Headline>
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
