'use client';

import { useFormContext } from '@/context/FormContext';
import s from './style.module.scss';

import { Button } from '@telegram-apps/telegram-ui';
import { useTimeServiceContext } from '@/context/TimeServiceContext';
import { useSelectServiceContext } from '@/context/SelectServiceContext';
import transformServices from '@/utils/findJobsByIds';
import useSelectService from '@/app/select-services/hooks/useSelectService';

const Send = () => {
  const { cards } = useSelectService();
  const { values, isFormValid } = useFormContext();
  const { value: timeValue } = useTimeServiceContext();
  const { value: serviceValue } = useSelectServiceContext();

  const handleSend = () => {
    const info = {
      name: values.name,
      phone: values.phone,
      comment: values.comment,
      remind: Number(values.reminder),
    };
    const allService = transformServices(serviceValue, cards, info);
    console.log('Form Data:', values);
    console.log('Time Value:', timeValue);
    console.log('Time Value:', values);

    console.log('Service Value:', allService);
  };

  return (
    <div className={s.button_wrapper}>
      <Button mode="filled" size="s" onClick={handleSend} disabled={!isFormValid}>
        Записатись
      </Button>
    </div>
  );
};

export default Send;
