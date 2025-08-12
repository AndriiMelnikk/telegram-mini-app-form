import { Info } from '@telegram-apps/telegram-ui';
import s from './callCastom.module.scss';

type Props = {
    leftNode: React.ReactNode | string;
    leftText: string;
    rightNode: React.ReactNode | string;
    rightText: string
}

export default function CallCastom({ leftNode, leftText, rightNode, rightText }: Props) {

    return (
        <div className={s.info_wrapper}>
            <Info subtitle={leftText} type="text" >
                {leftNode}
            </Info>
            <Info subtitle={rightText} type="text" >
                {rightNode}
            </Info>
        </div>

    );
}
