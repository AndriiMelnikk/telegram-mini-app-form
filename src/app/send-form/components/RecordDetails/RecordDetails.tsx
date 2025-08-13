import { Cell, IconContainer, Section, Title } from '@telegram-apps/telegram-ui';
import s from './recordDetails.module.scss';
import { IoIosCalendar } from 'react-icons/io';
import { MdChevronRight } from 'react-icons/md';
import ServiceCoponent from './ServiceCopmonent';
import Link from 'next/link';

export default function RecordDetails() {
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
            description="12:00-12:30"
          >
            Четвер, 28 серпня
          </Cell>
        </Link>
      </Section>
      <ServiceCoponent />
    </div>
  );
}
