'use client'

import s from './style.module.scss';

import { Page } from '@/components/Page';
import RecordDetails from './components/RecordDetails';
import Form from './components/Form';
import { Button, Cell, Section } from '@telegram-apps/telegram-ui';
import SpinnerCopmonent from '@/components/ui/Spiner';
import { StatusReq } from '@/types';
import useInitState from '@/components/page/Home/hooks/useInitState';

export default function Home() {

  const { status } = useInitState();

  if (status === StatusReq.pending) {
    return (
      <SpinnerCopmonent page />
    );
  }

  return (
    <Page back header>
      <RecordDetails />
      <Form />

      <Section>
        <Cell after="500 ₴" hovered>
          Всього
        </Cell>
      </Section>

      <div className={s.button_wrapper}>
        <Button mode="filled" size="s">
          Записатись
        </Button>
      </div>
    </Page>
  );
}
