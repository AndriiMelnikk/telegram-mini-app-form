import { Button } from '@telegram-apps/telegram-ui';
import s from './sumaryChangeService.module.scss';
import CallCastom from '@/components/ui/CallCastom';
import ModalChoseServise from '@/components/ui/ModalChoseServise';
import { useStorageKey } from '@/types/useLocalStorage';


export default function SumaryChangeService() {

  const { value: selectedServices } = useStorageKey(
    'SELECT_SERVICE',
    [] as string[]
  );

  // const selectedServices = [];


  if (!selectedServices?.length) {
    return <></>
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
