'use client';
import { Title } from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page';
import PremiumService from '@/components/ui/PremiumService';
import BarberTypeSelector from '@/components/page/SelectService/BarberTypeSelector';
import ServiceList from '@/components/page/SelectService/ServiceList';
import ServiceSearch from '@/components/page/SelectService/ServiceSearch';
import SumaryChangeService from '@/components/page/SelectService/SumaryChangeService';
import useSelectService from './hooks/useSelectService';

import s from './style.module.scss';
import { SelectServiceProvider } from '@/context/StorageKeyContext';


export default function SelectServicePage() {

  const state = useSelectService();

  return (
    <Page back header>
      <SelectServiceProvider>
        <Title level="2" weight="2">
          Вибір послуг
        </Title>

        <BarberTypeSelector
          services={state.services}
          selectedCategory={state.selectedCategory}
          setSelectedCategory={state.setSelectedCategory}
        />

        <ServiceSearch
          value={state.searchQuery}
          setValue={state.setSearchQuery}
          isFocused={state.isFocused}
          setIsFocused={state.setIsFocused}
        />

        <div className={s.premiumService_wrapper}>
          <PremiumService />
        </div>

        <ServiceList setSectionRef={state.setSectionRef}   search={state.searchQuery} />

        <SumaryChangeService isFocused={state.isFocused} />
      </SelectServiceProvider>
    </Page>
  );
}
