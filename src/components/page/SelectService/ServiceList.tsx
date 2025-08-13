'use client';

import { Spinner } from '@telegram-apps/telegram-ui';
import CardChangeBarber from '@/components/ui/CardChangeBarber';
import s from './style.module.scss';

import { StatusReq } from '@/types';
import useServices from './hocks/useServices';
import { useSelectService } from '@/context/StorageKeyContext';

type Props = {
  setSectionRef: (id: string, el: HTMLDivElement | null) => void;
}

export default function ServiceList({ setSectionRef }: Props) {
  const { services, status } = useServices();

  const { value, setValue } = useSelectService();

  if (status === StatusReq.pending) {
    return (
      <div className={s.spinner_wrapper}>
        <Spinner size="l" />
      </div>
    );
  }

  return (
    <div className={s.service_wrapper}>
      <CardChangeBarber cards={services} setSelected={setValue} selected={value} setSectionRef={setSectionRef} />
    </div>
  );
}
