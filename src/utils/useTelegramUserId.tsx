'use client';

import { useSignal } from '@telegram-apps/sdk-react';
import { initDataState as _initDataState } from '@telegram-apps/sdk-react';
import { useEffect } from 'react';
import { setCookie } from './whitCockies';

export function useTelegramInitData() {
  const initDataState = useSignal(_initDataState);

  const data = {
    query_id: initDataState?.query_id ?? null,
    user: initDataState?.user ?? null,
    auth_date: initDataState?.auth_date ?? null,
    signature: initDataState?.signature ?? null,
    hash: initDataState?.hash ?? null,
  };

  useEffect(() => {
    if (!initDataState) return;

    setCookie('query_id', data.query_id ?? '');
    setCookie('user', JSON.stringify(data.user ?? {}));
    setCookie('auth_date', data.auth_date?.toString() ?? '');
    setCookie('signature', data.signature ?? '');
    setCookie('hash', data.hash ?? '');
  }, [initDataState]);

  return data;
}

export default useTelegramInitData;
