import { Spinner } from '@telegram-apps/telegram-ui';

import s from './style.module.scss';

type Props = {
  page?: boolean;
};

const SpinnerCopmonent = ({ page = false }: Props) => {
  return (
    <div className={[s.spinner_wrapper, page ? s.page_wrapper : ''].join(' ')}>
      <Spinner size="l" />
    </div>
  );
};

export default SpinnerCopmonent;
