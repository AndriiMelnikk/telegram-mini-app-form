import { Info } from '@telegram-apps/telegram-ui';

import s from './headerPage.module.scss';
import useInitState from '@/components/page/Home/hooks/useInitState';

export default function HeaderPage() {

  const { titles } = useInitState();

  return (
    <div className={s.header} style={{ backgroundColor: 'var(--tgui--secondary_bg_color)' }}>
      <Info subtitle={titles.subtitle} type="text">
        {titles.title}
      </Info>
    </div>
  );
}
