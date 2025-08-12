import s from './premiumService.module.scss';

import { ModalHeader } from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader';
import { ModalClose } from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose';
import { IoIosClose } from 'react-icons/io';
import {
  Cell,
  IconContainer,
  Modal,
  Placeholder,
  Section,
  Text,
  Button,
} from '@telegram-apps/telegram-ui';
import { BsStars } from 'react-icons/bs';
import { MdChevronRight } from 'react-icons/md';
import Image from 'next/image';
import homeModalTitleImg from '@/app/_assets/home-modal-title.jpeg';

export default function PremiumService() {
  return (
    <Modal
      header={
        <ModalHeader
          after={
            <ModalClose>
              <IoIosClose color="var(--tgui--plain_foreground)" size={24} />
            </ModalClose>
          }
        >
          Only iOS header
        </ModalHeader>
      }
      trigger={
        <Section>
          <Cell
            before={
              <IconContainer>
                <BsStars size={28} />
              </IconContainer>
            }
            after={
              <IconContainer>
                <MdChevronRight size={28} />
              </IconContainer>
            }
          >
            Спробуй нову преміум послугу "Догляд за обличчям"
          </Cell>
        </Section>
      }
    >
      <div className={s.placeholder_wrapper}>
        <Placeholder style={{ maxWidth: '590px' }}>
          <Image src={homeModalTitleImg} width={500} alt="Picture of the home modal" />
          <p>
            <Text weight="3">Спробуй нову преміум послугу "Догляд за обличчям"</Text>
          </p>

          <p>
            <Text weight="3">
              Послуга "Догляд за обличчям" у Lumberjack Barberhouse створена для тих, хто прагне не
              тільки виглядати бездоганно, а й відчути справжнє розслаблення та турботу. Це
              комплексний ритуал, який поєднує в собі ефективний догляд за шкірою та моменти
              релаксу.
            </Text>
          </p>

          <p>
            <Text weight="3">
              Ви отримуєте чисту, доглянуту шкіру, гарний вигляд та відчуття повного релаксу.
            </Text>
          </p>

          <p>
            <Text weight="3">Оберіть послугу Онлайн, або напишіть Нам (кнопка нижче)</Text>
          </p>

          <Button mode="filled" size="s">
            Напишіть - ми додамо
          </Button>
        </Placeholder>
      </div>
    </Modal>
  );
}
