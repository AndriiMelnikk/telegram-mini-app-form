import {
  Cell,
  Checkbox,
  Info,
  Input,
  Link,
  Placeholder,
  Select,
  Title,
} from '@telegram-apps/telegram-ui';
import s from './form.module.scss';
import CallCastom from '@/components/ui/CallCastom';
import { FaPen } from 'react-icons/fa';

export default function RecordDetails() {
  return (
    <div className={s.app_wrapper}>
      <div className={s.title_wrapper}>
        <Title level="2" weight="2">
          Ваші дані
        </Title>
      </div>

      <div className={s.form_inputs}>
        <Input header="Ім'я" placeholder="Введіть ваше ім'я та прізвище" />
        <Input header="Телефон" placeholder="Номер із кодом країни" />
        <Input header="E-mail" placeholder="Введіть e-mail" />
        <Input header="Коментар" placeholder="Коментра до запису" />

        <Select header="Нагадування">
          <option>За 1 годину до візиту</option>
          <option>За 2 годину до візиту</option>
          <option>За 3 годину до візиту</option>
          <option>За 4 годину до візиту</option>
          <option>За 5 годину до візиту</option>
          <option>За 6 годину до візиту</option>
          <option>За 9 годину до візиту</option>
          <option>За 12 годину до візиту</option>
          <option>За 15 годину до візиту</option>
          <option>За 18 годину до візиту</option>
          <option>За 21 годину до візиту</option>
          <option>За 24 годину до візиту</option>
          <option>За 2 дня до візиту</option>
          <option>За 3 дня до візиту</option>
          <option>За 5 дня до візиту</option>
          <option>За 7 дня до візиту</option>
        </Select>
      </div>

      <div className={s.checkbox_wrapper}>
        <Placeholder>
          <Checkbox />
        </Placeholder>
        <Info type={'text'}>
          Я даю згоду на обробку моїх персональних даних і підтверджую, що я прочитав і прийняв{' '}
          <Link href="/">Політика конфіденційності</Link> і <Link href="/">Угода користувача</Link>
        </Info>
      </div>
    </div>
  );
}
