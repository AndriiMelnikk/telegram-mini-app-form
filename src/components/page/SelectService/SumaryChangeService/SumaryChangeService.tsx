import { Button } from '@telegram-apps/telegram-ui';
import s from './sumaryChangeService.module.scss';
import CallCastom from '@/components/ui/CallCastom';

import { useSumaryChangeService } from '../hocks/useSumaryChangeService';
import ModalChoseServise from '../ModalChoseServise';
import { useSelectServiceContext } from '@/context/SelectServiceContext';
import { useTimeServiceContext } from '@/context/TimeServiceContext';
import Link from 'next/link';

type Props = {
  isFocused: boolean;
};

export default function SumaryChangeService({ isFocused }: Props) {
  const { value } = useSelectServiceContext();
  const { value: timeServiceValue } = useTimeServiceContext();



  const { totalService, services } = useSumaryChangeService(value);


  if (!value.length || isFocused || !services.length) return null;

  return (
    <div className={s.app_wrapper}>
      <CallCastom
        leftNode={`${totalService.totalJobs} послуг${totalService.totalJobs > 1 ? 'и' : 'а'}`}
        leftText={totalService.time}
        rightNode={<ModalChoseServise />}
        rightText={`${totalService.totalPrice} ₴`}
      />

      <Link href={
        timeServiceValue.time && timeServiceValue.date ? "/send-form" : "/calendar"
      }>
        <div className={s.btn_wrapper}>
          <Button mode="filled" size="s">

            {timeServiceValue.time && timeServiceValue.date ? "Завершити запис" : "Обрати дату"}
          </Button>
        </div>
      </Link>


    </div>
  );
}
