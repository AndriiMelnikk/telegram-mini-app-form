'use client';

import { Page } from '@/components/Page';
import SpinnerCopmonent from '@/components/ui/Spiner';
import { StatusReq } from '@/types';
import useInitState from '@/components/page/Home/hooks/useInitState';
import Calendar from '@/components/ui/Calendar';
import { ThemeProvider } from '@emotion/react';
import { miniApp, useSignal } from '@telegram-apps/sdk-react';
import { darkTheme, lightTheme } from '@/components/ui/Calendar/theme';
import ChangeTime from './ChangeTime';

export default function Home() {
    const { status } = useInitState();
    const isDark = useSignal(miniApp.isDark);


    if (status === StatusReq.pending) {
        return <SpinnerCopmonent page />;
    }

    return (
        <Page back header>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <Calendar />
            </ThemeProvider>

            <ChangeTime />
        </Page>

    );
}
