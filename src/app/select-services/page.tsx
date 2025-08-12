'use client';

import { useState } from 'react';
import { Title } from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page';
import PremiumService from '@/components/ui/PremiumService';
import SumaryChangeService from '@/components/ui/SumaryChangeService';

import s from './style.module.scss';
import BarberTypeSelector from '@/components/page/SelectService/ BarberTypeSelector';
import ServiceList from '@/components/page/SelectService/ServiceList';
import ServiceSearch from '@/components/page/SelectService/ServiceSearch';

export default function SelectServicePage() {
  const [value, setValue] = useState('');

  return (
    <Page back header>
      <Title level="2" weight="2">
        Вибір послуг
      </Title>

      <BarberTypeSelector />
      <ServiceSearch value={value} setValue={setValue} />

      <div className={s.premiumService_wrapper}>
        <PremiumService />
      </div>

      <ServiceList />

      <SumaryChangeService />
    </Page>
  );
}
