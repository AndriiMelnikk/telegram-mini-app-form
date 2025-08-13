'use client';

import { Page } from '@/components/Page';
import SpinnerCopmonent from '@/components/ui/Spiner';
import { StatusReq } from '@/types';
import useInitState from '@/components/page/Home/hooks/useInitState';

export default function Home() {
    const { status } = useInitState();


    if (status === StatusReq.pending) {
        return <SpinnerCopmonent page />;
    }

    return (
        <Page back header>
            Other components can be added here as needed
        </Page>

    );
}
