'use client';

import { useFormContext } from '@/context/FormContext';
import s from './style.module.scss';

import { Button } from '@telegram-apps/telegram-ui';

const Send = () => {
  const { values, isFormValid } = useFormContext();

  const handleSend = () => {
    console.log('Form Data:', values);
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
