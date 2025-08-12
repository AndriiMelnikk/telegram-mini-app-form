import { Button } from '@telegram-apps/telegram-ui';
import s from './sumaryChangeService.module.scss';
import ModalChoseServise from '../ModalChoseServise';
import CallCastom from '../CallCastom';

export default function SumaryChangeService() {

  return (
    <div className={s.app_wrapper}>
      <CallCastom leftNode="1 послуга" leftText="1 год. 35хв" rightNode={<ModalChoseServise />} rightText="500 ₴" />

      <div className={s.btn_wrapper}>
        <Button mode="filled" size="s">
          Вибрати дату та час
        </Button>
      </div>
    </div>
  );
}
