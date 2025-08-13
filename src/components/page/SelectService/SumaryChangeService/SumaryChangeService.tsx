import { Button } from '@telegram-apps/telegram-ui';
import s from './sumaryChangeService.module.scss';
import CallCastom from '@/components/ui/CallCastom';
import ModalChoseServise from '@/components/ui/ModalChoseServise';
import { useStorageKey } from '@/hooks/useLocalStorage';

import { useStorageObserver } from '@/hooks/useStorageObserver';
import { useState } from 'react';
import useServices from '../hocks/useServices';

type Props = {
  isFocused: boolean;
};

export default function SumaryChangeService({ isFocused }: Props) {
  const { value: selectedServices } = useStorageKey('SELECT_SERVICE', [] as string[]);

  const [selectedServ, setSelectedServ] = useState<string[]>(selectedServices);

  useStorageObserver('SELECT_SERVICE', (value) => {
    setSelectedServ(value ?? []);
  });

  const { services } = useServices();

  console.log(services);

  if (!selectedServ || selectedServ.length === 0 || isFocused) {
    return <></>;
  }

  return (
    <div className={s.app_wrapper}>
      <CallCastom
        leftNode="1 послуга"
        leftText="1 год. 35хв"
        rightNode={<ModalChoseServise />}
        rightText="500 ₴"
      />

      <div className={s.btn_wrapper}>
        <Button mode="filled" size="s">
          Вибрати дату та час
        </Button>
      </div>
    </div>
  );
}
