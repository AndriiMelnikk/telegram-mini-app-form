import { Input, Select, Checkbox, Info, Link, Placeholder } from '@telegram-apps/telegram-ui';
import { useFormContext } from '@/context/FormContext';
import s from './form.module.scss';


export default () => {
  return (
    <div className={s.form}>
      <FormInputs />
      <ConsentCheckbox />
    </div>
  );
}

function FormInputs() {
  const { values, errors, handleChange } = useFormContext();

  return (
    <div className={s.form_inputs}>
      <Input
        header="Ім'я"
        placeholder="Введіть ваше ім'я та прізвище"
        value={values.name}
        onChange={e => handleChange('name', e.target.value)}
        status={errors.name ? 'error' : undefined}
      />
      <Input
        header="Телефон"
        placeholder="Номер із кодом країни"
        value={values.phone}
        onChange={e => handleChange('phone', e.target.value)} status={errors.phone ? 'error' : undefined}
      />
      <Input
        header="E-mail"
        placeholder="Введіть e-mail"
        value={values.email}
        onChange={e => handleChange('email', e.target.value)}
        status={errors.email ? 'error' : undefined}
      />
      <Input
        header="Коментар"
        placeholder="Коментар до запису"
        value={values.comment}
        onChange={e => handleChange('comment', e.target.value)}
        status={errors.comment ? 'error' : undefined}
      />

      <Select
        header="Нагадування"
        value={values.reminder}
        onChange={e => handleChange('reminder', e.target.value)}
      >
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
  );
}

function ConsentCheckbox() {
  const { values, handleChange } = useFormContext();

  return (
    <div className={s.checkbox_wrapper}>
      <Placeholder>
        <Checkbox
          checked={values.consent}
          onChange={e => handleChange('consent', e.target.checked)}
        />
      </Placeholder>
      <Info type="text">
        Я даю згоду на обробку моїх персональних даних і підтверджую, що я прочитав і прийняв{' '}
        <Link href="/">Політика конфіденційності</Link> і <Link href="/">Угода користувача</Link>
      </Info>
    </div>
  );
}
