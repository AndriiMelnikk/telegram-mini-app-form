import { Cell, IconContainer, Link, Section, Title } from '@telegram-apps/telegram-ui';
import s from './recordDetails.module.scss';
import { IoIosCalendar } from 'react-icons/io';
import { MdChevronRight } from 'react-icons/md';
import CallCastom from '@/components/ui/CallCastom';
import { FaPen } from 'react-icons/fa';

export default function RecordDetails() {
  return (
    <div className={s.app_wrapper}>
      <div className={s.title_wrapper}>
        <Title level="1" weight="2">
          Деталі запису
        </Title>
      </div>

      <Section>
        <Link href="/">
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
      <div className={s.placeholder_wrapper}>
        <CallCastom
          leftNode={
            <Title level="2" weight="2">
              3 Послуги
            </Title>
          }
          leftText="1 год. 35хв"
          rightNode={
            <Link href="/select-services">
              <FaPen className={s.pen_svg} />
            </Link>
          }
        />

        <CallCastom leftNode="Стрижка бороди" leftText="1 год. 35хв" rightNode="500 ₴" />
        <CallCastom leftNode="Стрижка ножицями" leftText="1 год. 35хв" rightNode="500 ₴" />
        <CallCastom leftNode="Стрижка (включаючи Фейд)" leftText="1 год. 35хв" rightNode="500 ₴" />
      </div>

      <Section>
        <Cell after="500 ₴" hovered>
          Всього
        </Cell>
      </Section>
    </div>
  );
}
