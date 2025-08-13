'use client'

import { Cell, Section, Title } from '@telegram-apps/telegram-ui';
import Link from 'next/link';
import s from './recordDetails.module.scss';
import CallCastom from '@/components/ui/CallCastom';
import { FaPen } from 'react-icons/fa';
import { useSumaryChangeService } from '@/components/page/SelectService/hocks/useSumaryChangeService';
import { useGetAllJobs } from '@/components/page/SelectService/hocks/useGetAllJobs';
import { useSelectServiceContext } from '@/context/SelectService';
import { formatMinutes } from '@/utils/formatMinutes';
import SpinnerCopmonent from '@/components/ui/Spiner';

const ServiceCoponent = () => {
    const { value } = useSelectServiceContext();

    const { totalService, filtered } = useSumaryChangeService(value);
    const selectJobs = useGetAllJobs(filtered);

    if (!selectJobs.length) return <SpinnerCopmonent page />;

    return (
        <>
            <div className={s.placeholder_wrapper}>
                <CallCastom
                    leftNode={
                        <Title level="2" weight="2">
                            {totalService.totalJobs} послуг{totalService.totalJobs > 1 ? 'и' : 'а'}
                        </Title>
                    }
                    leftText={totalService.time}
                    rightNode={
                        <Link href="/select-services">
                            <FaPen className={s.pen_svg} />
                        </Link>
                    }
                />

                {selectJobs.map((job) => (
                    <CallCastom
                        key={job.id}
                        leftNode={job.title}
                        leftText={formatMinutes(job.time)}
                        rightNode={job.price}

                    />
                ))}

            </div>

            <Section>
                <Cell after={`${totalService.totalPrice} ₴`} hovered>
                    Всього
                </Cell>
            </Section>
        </>
    )
}

export default ServiceCoponent;