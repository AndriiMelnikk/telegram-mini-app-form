import { Button } from '@telegram-apps/telegram-ui';
import s from './sumaryChangeService.module.scss';
import CallCastom from '@/components/ui/CallCastom';

import { useSumaryChangeService } from '../hocks/useSumaryChangeService';
import ModalChoseServise from '../ModalChoseServise';
import createStorageContext from '@/context/createStorageContext';
import { useSelectServiceContext } from '@/context/SelectServiceContext';

type Props = {
  isFocused: boolean;
};

export default function SumaryChangeService({ isFocused }: Props) {
  const { value } = useSelectServiceContext();


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
      <div className={s.btn_wrapper}>
        <Button mode="filled" size="s">
          Вибрати дату та час
        </Button>
      </div>
    </div>
  );
}
