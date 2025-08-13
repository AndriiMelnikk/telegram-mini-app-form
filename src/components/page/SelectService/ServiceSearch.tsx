'use client';

import { Input, Tappable } from '@telegram-apps/telegram-ui';
import { IoIosSearch } from 'react-icons/io';
import s from './style.module.scss';

export default function ServiceSearch({
  value,
  setValue,
  isFocused,
  setIsFocused,
}: {
  value: string;
  setValue: (v: string) => void;
  isFocused: boolean;
  setIsFocused: (v: boolean) => void;
}) {
  return (
    <div className={s.search_wrapper}>
      <Input
        placeholder="Пошук ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        before={
          <Tappable Component="div" style={{ display: 'flex' }} onClick={() => setValue('')}>
            <IoIosSearch />
          </Tappable>
        }
      />
    </div>
  );
}
