import s from './modalChoseServise.module.scss';

import { Button, Placeholder, Text, Title } from '@telegram-apps/telegram-ui';
import CallCastom from '../CallCastom';
import { IoIosClose } from 'react-icons/io';

export default function ContentModal() {
  return (
    <div className={s.placeholder_wrapper}>
      <Placeholder style={{ maxWidth: '590px', width: '100%' }}>
        <CallCastom
          leftNode={
            <Title level="3" weight="2">
              3 Послуги
            </Title>
          }
          leftText="1 год. 35хв"
          rightNode="1500 ₴"
        />

        <CallCastom
          leftNode="1 послуга"
          leftText="1 год. 35хв"
          rightNode={<IoIosClose />}
          rightText="500 ₴"
        />
        <CallCastom
          leftNode="1 послуга"
          leftText="1 год. 35хв"
          rightNode={<IoIosClose />}
          rightText="500 ₴"
        />
        <CallCastom
          leftNode="1 послуга"
          leftText="1 год. 35хв"
          rightNode={<IoIosClose />}
          rightText="500 ₴"
        />

        <Button>Обрати дату та час</Button>
      </Placeholder>
    </div>
  );
}
