// FormContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type FormValues = {
  name: string;
  phone: string;
  comment: string;
  reminder: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type FormContextType = {
  values: FormValues;
  errors: FormErrors;
  isFormValid: boolean;
  handleChange: <K extends keyof FormValues>(field: K, value: FormValues[K]) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

const initialValues: FormValues = {
  name: '',
  phone: '',
  comment: '',
  reminder: '60',
  consent: false,
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (field: keyof FormValues, value: any) => {
    switch (field) {
      case 'name':
        return value.trim() ? '' : 'Вкажіть імʼя';
      case 'phone':
        return /^\+?\d{10,15}$/.test(value) ? '' : 'Невірний формат телефону';
      case 'consent':
        return value ? '' : 'Потрібно підтвердити згоду';
      default:
        return '';
    }
  };

  const handleChange = <K extends keyof FormValues>(field: K, value: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    const errorMsg = validate(field, value);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const isFormValid =
    Object.values(errors).every((e) => !e) &&
    !!values.name.trim() &&
    !!values.phone.trim() &&
    !!values.consent;

  return (
    <FormContext.Provider value={{ values, errors, isFormValid, handleChange }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error('useFormContext must be used within FormProvider');
  return ctx;
};
