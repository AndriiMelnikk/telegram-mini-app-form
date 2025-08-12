'use client';

import { Page } from '@/components/Page';
import RecordDetails from './components/RecordDetails';
import Form from './components/Form';

export default function Home() {
  return (
    <Page back={true} header={true}>
      <RecordDetails />
      <Form />

      <div>Вся сума</div>
      <div>Записатись</div>
    </Page>
  );
}
