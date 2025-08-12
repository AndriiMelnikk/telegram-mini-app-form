'use client';

import s from './style.module.scss';

import { Page } from '@/components/Page';
import RecordDetails from './components/RecordDetails';
import Form from './components/Form';
import { Button, Cell, Section } from '@telegram-apps/telegram-ui';

export default function Home() {
  return (
    <Page back={true} header={true}>
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
