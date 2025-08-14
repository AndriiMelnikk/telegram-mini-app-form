'use client';

import { Page } from '@/components/Page';
import SpinnerCopmonent from '@/components/ui/Spiner';
import { StatusReq } from '@/types';
import useInitState from '@/components/page/Home/hooks/useInitState';
import ChangeTime from './ChangeTime';
import CalendarBlock from './Calendar';
import NextStep from '@/components/page/Calendar/NextStep';
import { useTimeServiceContext } from '@/context/TimeServiceContext';
import { use, useEffect, useState } from 'react';
import getFreeTime from './hooks/getFreeTime';
import dayjs from 'dayjs';

export default function Home() {
  const { status } = useInitState();
  const { value } = useTimeServiceContext();
  const [freeTime, setFreeTime] = useState<string[]>([]);




  useEffect(() => {
    getFreeTime(value.date || dayjs().format('YYYY-MM-DD')).then(data => setFreeTime(data))
      .catch(err => { setFreeTime([]); console.error(err) });
  }, [value.date])


  console.log(freeTime);

  if (status === StatusReq.pending) {
    return <SpinnerCopmonent page />;
  }

  return (
    <Page back header>
      <CalendarBlock />
      <ChangeTime freeTime={freeTime} />
      <NextStep />
    </Page>
  );
}


