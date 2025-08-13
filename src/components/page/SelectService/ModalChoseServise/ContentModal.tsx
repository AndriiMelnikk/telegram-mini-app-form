import CallCastom from '@/components/ui/CallCastom';
import s from './modalChoseServise.module.scss';

import { Button, Placeholder, Title } from '@telegram-apps/telegram-ui';

import { IoIosClose } from 'react-icons/io';
import { useGetAllJobs } from '../hocks/useGetAllJobs';
import { formatMinutes } from '@/utils/formatMinutes';

import { useSumaryChangeService } from '../hocks/useSumaryChangeService';
import { useSelectServiceContext } from '@/context/SelectServiceContext';

export default function ContentModal() {
  const { value, setValue } = useSelectServiceContext();

  const { totalService, filtered } = useSumaryChangeService(value);
  const selectJobs = useGetAllJobs(filtered);

  const handleRemoveJob = (id: string) => {
    const filteredJob = value.filter((job) => job !== id);
    setValue(filteredJob);
  };

  if (!selectJobs.length) return null;

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

        {selectJobs.map((job) => (
          <CallCastom
            key={job.id}
            leftNode={job.title}
            leftText={formatMinutes(job.time)}
            rightNode={<IoIosClose onClick={() => handleRemoveJob(job.id)} />}
          />
        ))}

        <Button>Обрати дату та час</Button>
      </Placeholder>
    </div>
  );
}
