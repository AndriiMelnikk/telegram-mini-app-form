'use client';

import { type PropsWithChildren, useEffect } from 'react';
import { initData, miniApp, useLaunchParams, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot, List } from '@telegram-apps/telegram-ui';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorPage } from '@/components/ErrorPage';
import { useDidMount } from '@/hooks/useDidMount';
import { setLocale } from '@/core/i18n/locale';

import './styles.css';
import { DataProvider } from '@/context/DataContext';
import { SelectServiceProvider } from '@/context/SelectServiceContext';
import { TimeServiceProvider } from '@/context/TimeServiceContext';

function RootInner({ children }: PropsWithChildren) {
  const lp = useLaunchParams();

  const isDark = useSignal(miniApp.isDark);
  const initDataUser = useSignal(initData.user);

  useEffect(() => {
    initDataUser && setLocale(initDataUser.language_code);
  }, [initDataUser]);

  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.tgWebAppPlatform) ? 'ios' : 'base'}
      className="root"
    >
      <DataProvider>
        <SelectServiceProvider>
          <TimeServiceProvider>
            <List
              style={{
                background: 'var(--tgui--secondary_bg_color)',
                padding: '0 20px',
                minHeight: '100vh',
              }}
            >
              {children}
            </List>
          </TimeServiceProvider>
        </SelectServiceProvider>
      </DataProvider>
    </AppRoot>
  );
}

export function Root(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of
  // the Server Side Rendering. That's why we are showing loader on the server
  // side.
  const didMount = useDidMount();

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <RootInner {...props} />
    </ErrorBoundary>
  ) : (
    <div className="root__loading">Loading</div>
  );
}
