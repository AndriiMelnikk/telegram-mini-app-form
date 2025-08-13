'use client';



import { Page } from '@/components/Page';
import RecordDetails from './components/RecordDetails';
import { Cell, Section } from '@telegram-apps/telegram-ui';
import SpinnerCopmonent from '@/components/ui/Spiner';
import { StatusReq } from '@/types';
import useInitState from '@/components/page/Home/hooks/useInitState';
import { useSumaryChangeService } from '@/components/page/SelectService/hocks/useSumaryChangeService';


import Send from './components/Send';
import { FormProvider } from '@/context/FormContext';
import Form from './components/Form';
import { useSelectServiceContext } from '@/context/SelectServiceContext';

export default function Home() {
  const { status } = useInitState();

  const { value } = useSelectServiceContext();

  const { totalService } = useSumaryChangeService(value);

  if (status === StatusReq.pending) {
    return <SpinnerCopmonent page />;
  }

  return (
    <Page back header>
      <FormProvider>
        <RecordDetails />

        <Form />

        <Section>
          <Cell after={`${totalService.totalPrice} ₴`} hovered>
            Всього
          </Cell>
        </Section>

        <Send />

      </FormProvider >
    </Page>

  );
}
