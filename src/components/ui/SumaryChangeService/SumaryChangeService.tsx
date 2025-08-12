import { Button, Cell, Info } from '@telegram-apps/telegram-ui';
import s from './sumaryChangeService.module.scss';
import { FaPen } from 'react-icons/fa';

export default function SumaryChangeService() {
  return (
    <div className={s.app_wrapper}>
      <Cell
        after={
          <Info subtitle="500 ₴" type="text">
            <FaPen size={14} className={s.pen_svg} />
          </Info>
        }
        subtitle="1 год. 30хв"
        hovered
        className={s.btn_wrapper}
      >
        1 послуга
      </Cell>

      <div className={s.btn_wrapper}>
        <Button mode="filled" size="s">
          Вибрати дату та час
        </Button>
      </div>
    </div>
  );
}
