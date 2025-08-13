import s from './modalChoseServise.module.scss';

import { ModalHeader } from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader';
import { ModalClose } from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose';
import { IoIosClose } from 'react-icons/io';
import { Modal, VisuallyHidden } from '@telegram-apps/telegram-ui';
import { FaPen } from 'react-icons/fa';
import ContentModal from './ContentModal';

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
      trigger={<FaPen className={s.pen_svg} />}
    >
      <VisuallyHidden>
        <h2>Вибір послуги</h2>
      </VisuallyHidden>

      <ContentModal />
    </Modal>
  );
}
