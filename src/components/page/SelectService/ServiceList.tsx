'use client';

import { Spinner, Title } from '@telegram-apps/telegram-ui';
import CardChangeBarber from '@/components/ui/CardChangeBarber';
import s from './style.module.scss';


import { StatusReq } from '@/types';
import useServices from './hocks/useServices';
import { useStorageKey } from '@/hooks/useLocalStorage';


export default function ServiceList() {
  const { services, status } = useServices();
  const { setValue, value: selectedServices } = useStorageKey(
    'SELECT_SERVICE',
    [] as string[]
  );

  if (status === StatusReq.pending) {
    return <div className={s.spinner_wrapper}>
      <Spinner size="l" />
    </div>;
  }

  return (
    <div className={s.service_wrapper}>
      <Title level="3" weight="2">
        Молодший барбер
      </Title>
      <CardChangeBarber cards={services} setSelected={setValue} selected={selectedServices} />
    </div>
  );
}


