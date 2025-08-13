'use client';

import { Spinner } from '@telegram-apps/telegram-ui';
import CardChangeBarber from '@/components/ui/CardChangeBarber';
import s from './style.module.scss';

import { StatusReq } from '@/types';
import useServices from '../Home/hooks/useInitState';
import { useSelectServiceContext } from '@/context/createStorageContext';
import useSelectService from '@/app/select-services/hooks/useSelectService';
import { getSearchServices } from '@/app/select-services/hooks/getSearchServices';

type Props = {
  setSectionRef: (id: string, el: HTMLDivElement | null) => void;
  search?: string;
};

export default function ServiceList({ setSectionRef, search }: Props) {
  const { status } = useServices();

  const { cards } = useSelectService();

  const cardsFiltered = getSearchServices(cards, search);

  if (status === StatusReq.pending) {
    return (
      <div className={s.spinner_wrapper}>
        <Spinner size="l" />
      </div>
    );
  }

  return (
    <div className={s.service_wrapper}>
      <CardChangeBarber cards={cardsFiltered} setSectionRef={setSectionRef} />
    </div>
  );
}
