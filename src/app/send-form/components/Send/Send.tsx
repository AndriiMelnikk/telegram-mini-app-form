'use client';

import { useFormContext } from '@/context/FormContext';
import s from './style.module.scss';

import { Button } from '@telegram-apps/telegram-ui';
import { useTimeServiceContext } from '@/context/TimeServiceContext';
import { useSelectServiceContext } from '@/context/SelectServiceContext';
import transformServices from '@/utils/findJobsByIds';
import useSelectService from '@/app/select-services/hooks/useSelectService';
import { useState } from 'react';
import SpinnerCopmonent from '@/components/ui/Spiner';
import sendForm from './hooks/sendForm';
import dateTimeToTimestamp from '@/utils/dateTimeToTimestamp';
import { add30Minutes } from '@/utils/add30minutes';

const Send = () => {
  const { cards } = useSelectService();
  const { values, isFormValid } = useFormContext();
  const { value: timeValue } = useTimeServiceContext();
  const { value: serviceValue } = useSelectServiceContext();
  const [sended, setSended] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [userId, setUserId] = useState(null);

  // useEffect(() => {
  //   const { initDataUnsafe } = retrieveLaunchParams();
  //   if (initDataUnsafe?.user?.id) {
  //     setUserId(initDataUnsafe.user.id);
  //   }
  // }, []);

  const handleSend = () => {
    setLoading(true);
    const info = {
      name: values.name,
      phone: values.phone,
      comment: values.comment,
      remind: Number(values.reminder),
    };
    const allService = transformServices(serviceValue, cards, info);
    const endTime = add30Minutes(timeValue.time || '00:00');

    const hard = {
      "user_id": "u90127404",
      "start": dateTimeToTimestamp({ time: timeValue.time, date: timeValue.date }),
      "end": dateTimeToTimestamp({ time: endTime, date: timeValue.date }),
    }

    console.log('Service Value:', allService);

    sendForm({ ...allService, ...hard }).then(() => {
      alert('Ви успішно записані');
      setSended(true);
    }).catch(() => {
      alert('Сталася помилка. Спробуйте ще раз.');
    }).finally(() => {
      setLoading(false);
    });
  };

  if (loading) {
    return <div className={s.button_wrapper}> <SpinnerCopmonent /></div>;
  }

  if (sended) {
    return <div className={s.button_wrapper}>
      <Button mode="filled" size="s" disabled>
        Ви успішно записані
      </Button>
    </div>
  }


  return (
    <div className={s.button_wrapper}>

      <Button mode="filled" size="s" onClick={handleSend} >
        Записатись
      </Button>
    </div>
  );
}
export default Send;
