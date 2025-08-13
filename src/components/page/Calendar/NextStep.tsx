import { Button } from '@telegram-apps/telegram-ui';
import s from './style.module.scss';
import Link from 'next/link';
import { useTimeServiceContext } from '@/context/TimeServiceContext';
import { useSelectServiceContext } from '@/context/SelectServiceContext';


export default function NextStep() {
    const { value } = useTimeServiceContext()

    const { value: selectServiceValue } = useSelectServiceContext()


    if (!value.time || !value.date) return null;

    return (
        <div className={s.app_wrapper}>


            <Link href={
                selectServiceValue.length > 0 ? "/send-form" : "/select-services"
            }>
                <div className={s.btn_wrapper}>
                    <Button mode="filled" size="s">
                        {selectServiceValue.length > 0 ? "Завершити запис" : "Обрати запис"}
                    </Button>
                </div>
            </Link>

        </div>
    );
}
