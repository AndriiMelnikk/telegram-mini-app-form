'use client';

import { Cell, Radio } from '@telegram-apps/telegram-ui';
import s from './style.module.scss';

export default function BarberTypeSelector() {
  return (
    <div className={s.radio_wrapper}>
      <Cell Component="label" before={<Radio name="radio" value="1" defaultChecked />} multiline>
        Молодший барбер
      </Cell>
      <Cell Component="label" before={<Radio name="radio" value="2" />} multiline>
        Барбер
      </Cell>
      <Cell Component="label" before={<Radio name="radio" value="3" />} multiline>
        Додатковов
      </Cell>
    </div>
  );
}
