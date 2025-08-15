'use client';

import { useSignal } from '@telegram-apps/sdk-react';
import { initDataState as _initDataState } from '@telegram-apps/sdk-react';

export function useTelegramUserId() {
  const initDataState = useSignal(_initDataState);
  return initDataState?.user?.id ?? null;
}

