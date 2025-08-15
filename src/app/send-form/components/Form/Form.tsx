import { Input, Select, Checkbox, Info, Link, Placeholder } from '@telegram-apps/telegram-ui';
import { useFormContext } from '@/context/FormContext';
import s from './form.module.scss';

const MyComponent = () => {
  return (
    <div className={s.form}>
      <FormInputs />
      <ConsentCheckbox />
    </div>
  );
};

export default MyComponent;

function FormInputs() {
  const { values, errors, handleChange } = useFormContext();

  return (
    <div className={s.form_inputs}>
      <Input
        header="Ім'я"
        placeholder="Введіть ваше ім'я та прізвище"
        value={values.name}
        onChange={(e) => handleChange('name', e.target.value)}
        status={errors.name ? 'error' : undefined}
      />
      <Input
        header="Телефон"
        placeholder="Номер із кодом країни"
        value={values.phone}
        onChange={(e) => handleChange('phone', e.target.value)}
        status={errors.phone ? 'error' : undefined}
      />
      <Input
        header="Коментар"
        placeholder="Коментар до запису"
        value={values.comment}
        onChange={(e) => handleChange('comment', e.target.value)}
        status={errors.comment ? 'error' : undefined}
      />

      <Select
        header="Нагадування"
        value={values.reminder}
        onChange={(e) => handleChange('reminder', e.target.value)}
      >
        <option value={60}>За 1 годину до візиту</option>
        <option value={120}>За 2 годину до візиту</option>
        <option value={180}>За 3 годину до візиту</option>
        <option value={240}>За 4 годину до візиту</option>
        <option value={300}>За 5 годину до візиту</option>
        <option value={360}>За 6 годину до візиту</option>
        <option value={540}>За 9 годину до візиту</option>
        <option value={720}>За 12 годину до візиту</option>
        <option value={900}>За 15 годину до візиту</option>
        <option value={1080}>За 18 годину до візиту</option>
        <option value={1260}>За 21 годину до візиту</option>
        <option value={1440}>За 24 годину до візиту</option>
        <option value={2880}>За 2 дня до візиту</option>
        <option value={4320}>За 3 дня до візиту</option>
        <option value={7200}>За 5 дня до візиту</option>
        <option value={10080}>За 7 дня до візиту</option>
      </Select>
    </div>
  );
}

function ConsentCheckbox() {
  const { values, handleChange } = useFormContext();

  return (
    <div className={s.checkbox_wrapper}>
      <Placeholder>
        <Checkbox
          checked={values.consent}
          onChange={(e) => handleChange('consent', e.target.checked)}
        />
      </Placeholder>
      <Info type="text">
        Я даю згоду на обробку моїх персональних даних і підтверджую, що я прочитав і прийняв{' '}
        <Link href="/">Політика конфіденційності</Link> і <Link href="/">Угода користувача</Link>
      </Info>
    </div>
  );
}
