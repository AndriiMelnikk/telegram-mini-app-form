import CallCastom from '@/components/ui/CallCastom';
import s from './modalChoseServise.module.scss';

import { Button, Placeholder, Text, Title } from '@telegram-apps/telegram-ui';

import { IoIosClose } from 'react-icons/io';
import { useSumaryChangeService } from '../hocks/useSumaryChangeService';
import { useGetAllJobs } from '../hocks/useGetAllJobs';
import { formatMinutes } from '@/utils/formatMinutes';

export default function ContentModal() {


  const { totalService, filtered } = useSumaryChangeService();

  const selectJobs = useGetAllJobs(filtered)


  return (
    <div className={s.placeholder_wrapper}>
      <Placeholder style={{ maxWidth: '590px', width: '100%' }}>
        <CallCastom
          leftNode={
            <Title level="3" weight="2">
              {totalService.totalJobs} послуг{totalService.totalJobs > 1 ? 'и' : 'а'}
            </Title>
          }
          leftText={totalService.time}
          rightText={`${totalService.totalPrice} ₴`}
        />

        {selectJobs.map(job => (
          <CallCastom
            key={job.id}
            leftNode={job.title}
            leftText={formatMinutes(job.time)}
            rightNode={<IoIosClose />}
          />
        ))}

        <Button>Обрати дату та час</Button>
      </Placeholder>
    </div>
  );
}
