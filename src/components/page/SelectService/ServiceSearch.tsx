'use client';

import { Input, Tappable } from '@telegram-apps/telegram-ui';
import { IoIosSearch } from 'react-icons/io';
import s from './style.module.scss';

export default function ServiceSearch({
  value,
  setValue,
}: {
  value: string;
  setValue: (v: string) => void;
}) {
  return (
    <div className={s.search_wrapper}>
      <Input
        placeholder="Пошук ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        before={
          <Tappable Component="div" style={{ display: 'flex' }} onClick={() => setValue('')}>
            <IoIosSearch />
          </Tappable>
        }
      />
    </div>
  );
}
