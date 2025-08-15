'use client';

import { Page } from '@/components/Page';
import SpinnerCopmonent from '@/components/ui/Spiner';
import { StatusReq } from '@/types';
import useInitState from '@/components/page/Home/hooks/useInitState';
import ChangeTime from './ChangeTime';
import CalendarBlock from './Calendar';
import NextStep from '@/components/page/Calendar/NextStep';
import { useTimeServiceContext } from '@/context/TimeServiceContext';
import { useEffect, useState } from 'react';
import getFreeTime from './hooks/getFreeTime';
import dayjs from 'dayjs';
import s from './style.module.scss';

export default function Home() {
  const { status } = useInitState();
  const { value } = useTimeServiceContext();
  const [freeTime, setFreeTime] = useState<string[]>([]);

  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getFreeTime(value.date || dayjs().format('YYYY-MM-DD'))
      .then((data) => setFreeTime(data))
      .catch((err) => {
        setFreeTime([]);
        alert('Сталася помилка. Спробуйте ще раз.');
        console.error(err);
      })
      .finally(() => setLoader(false));
  }, [value.date]);

  console.log(freeTime);

  if (status === StatusReq.pending) {
    return <SpinnerCopmonent page />;
  }

  return (
    <Page back header>
      <CalendarBlock />
      {loader ? <div className={s.block_spiner}> <SpinnerCopmonent /></div> : <ChangeTime freeTime={freeTime} />}
      <NextStep />
    </Page>
  );
}
