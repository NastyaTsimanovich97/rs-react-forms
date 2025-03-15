import { useState } from 'react';
import { Navigate } from 'react-router';
import { FieldError, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';

import { User, userSchema } from '../schemas/user';
import SubmitButton from './form-elements/SubmitButton';
import TextInputControll from './controll-form-elements/TextInput';
import NumberInputControll from './controll-form-elements/NumberInput';
import EmailInputControll from './controll-form-elements/EmailInput';
import PasswordControll from './controll-form-elements/Password';
import RadioButtonControll from './controll-form-elements/RadioButton';
import CheckboxControll from './controll-form-elements/Checkbox';
import UploaderControll from './controll-form-elements/Uploader';
import CountryAutocompleteControll from './controll-form-elements/CountryAutocomplete';
import { setUserDataControll } from '../app/userDataSliceControll';

export default function HookForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      name: '',
      age: 0,
      email: '',
      password: '',
      repeatPassword: '',
      country: '',
      file: '',
    },
    mode: 'onChange',
  });

  const dispatch = useDispatch();

  const [submitted, setSubmitted] = useState(false);

  const onSubmitHandler = (data: User) => {
    dispatch(setUserDataControll(data));
    setSubmitted(true);
  };

  if (submitted) {
    return <Navigate to="/" replace />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <TextInputControll
        control={control}
        label="Name"
        name="name"
        id="controlled-name"
        error={errors.name}
      />
      <NumberInputControll
        control={control}
        label="Age"
        name="age"
        id="controlled-age"
        error={errors.age}
      />
      <EmailInputControll
        control={control}
        label="Email"
        name="email"
        id="controlled-email"
        error={errors.email}
      />
      <PasswordControll
        control={control}
        label="Password"
        name="password"
        id="controlled-pasword"
        error={errors.password}
      />
      <PasswordControll
        control={control}
        label="Repeat Password"
        name="repeatPassword"
        id="controlled-repeat-pasword"
        error={errors.repeatPassword}
      />
      <RadioButtonControll
        control={control}
        label="Gender"
        name="gender"
        options={[
          { id: 'm', value: 'male', label: 'Male' },
          { id: 'f', value: 'female', label: 'Female' },
          { id: 'o', value: 'other', label: 'Other' },
        ]}
        error={errors.gender as unknown as FieldError}
      />
      <label>Conditions</label>
      <CheckboxControll
        control={control}
        id="tc"
        name="tc"
        label="Terms and Conditions agreement"
        error={errors.tc}
      />
      <UploaderControll
        control={control}
        label="Upload Picture"
        name="file"
        id="controlled-file"
        error={errors.file as FieldError}
      />
      <CountryAutocompleteControll control={control} name="country" />
      <SubmitButton />
    </form>
  );
}
