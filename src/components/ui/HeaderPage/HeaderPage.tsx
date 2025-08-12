import { Info } from '@telegram-apps/telegram-ui';

import s from './headerPage.module.scss';

export default function HeaderPage() {
  return (
    <div className={s.header} style={{ backgroundColor: 'var(--tgui--secondary_bg_color)' }}>
      <Info subtitle="проспект Повітряних Сил, 44" type="text">
        Lumberjack Soloma
      </Info>
    </div>
  );
}
