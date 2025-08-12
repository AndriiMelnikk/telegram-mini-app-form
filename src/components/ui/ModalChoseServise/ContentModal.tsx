
import s from './modalChoseServise.module.scss';

import {

    Placeholder,
    Text,
} from '@telegram-apps/telegram-ui';
import CallCastom from '../CallCastom';
import { IoIosClose } from 'react-icons/io';


export default function ContentModal() {
    return (
        <div className={s.placeholder_wrapper}>
            <Placeholder style={{ maxWidth: '590px' }}>
                <p>
                    <Text weight="3">Спробуй нову преміум послугу "Догляд за обличчям"</Text>
                </p>

                <CallCastom leftNode="1 послуга" leftText="1 год. 35хв" rightNode={<IoIosClose/>} rightText="500 ₴" />
                                <CallCastom leftNode="1 послуга" leftText="1 год. 35хв" rightNode={<IoIosClose/>} rightText="500 ₴" />
                                                <CallCastom leftNode="1 послуга" leftText="1 год. 35хв" rightNode={<IoIosClose/>} rightText="500 ₴" />
                                                
            </Placeholder>
        </div>
    );
}
