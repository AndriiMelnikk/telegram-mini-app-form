import { Title } from '@telegram-apps/telegram-ui';
import CardChangeBarber from '@/components/ui/CardChangeBarber';
import { mock } from './mockData';
import s from './style.module.scss';

export default function ServiceList() {
  return (
    <div className={s.service_wrapper}>
      <Title level="3" weight="2">
        Молодший барбер
      </Title>
      <CardChangeBarber cards={mock} />
    </div>
  );
}
