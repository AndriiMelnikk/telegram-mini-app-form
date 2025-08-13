import { Cell, IconContainer, Section, Title } from '@telegram-apps/telegram-ui';
import s from './recordDetails.module.scss';
import { IoIosCalendar } from 'react-icons/io';
import { MdChevronRight } from 'react-icons/md';
import ServiceCoponent from './ServiceCopmonent';
import Link from 'next/link';
import { useTimeServiceContext } from '@/context/TimeServiceContext';
import { add30Minutes } from '@/utils/add30minutes';
import { formatDateUA } from '@/utils/formatDateUA';

export default function RecordDetails() {

  const { value } = useTimeServiceContext();

  const endTime = add30Minutes(value.time || "00:00");
  return (
    <div className={s.app_wrapper}>
      <div className={s.title_wrapper}>
        <Title level="1" weight="2">
          Деталі запису
        </Title>
      </div>

      <Section>
        <Link href="/calendar">
          <Cell
            before={
              <IconContainer>
                <IoIosCalendar />
              </IconContainer>
            }
            after={
              <IconContainer>
                <MdChevronRight />
              </IconContainer>
            }
            description={<>{value.time || "00:00"} - {endTime}</>}
          >
            <>{formatDateUA(value.date || "")}</>
          </Cell>
        </Link>
      </Section>
      <ServiceCoponent />
    </div>
  );
}
