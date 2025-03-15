import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router';
import { ValidationError } from 'yup';

import Checkbox from './form-elements/Checkbox';
import CountryAutocomplete from './form-elements/CountryAutocomplete';
import EmailInput from './form-elements/EmailInput';
import NumberInput from './form-elements/NumberInput';
import Password from './form-elements/Password';
import RadioButton from './form-elements/RadioButton';
import SubmitButton from './form-elements/SubmitButton';
import TextInput from './form-elements/TextInput';
import Uploader from './form-elements/Uploader';

import { setUserData } from '../app/userDataSlice';
import { userSchema } from '../schemas/user';

const DEFAULT_ERRORS = {
  name: null,
  age: null,
  email: null,
  password: null,
  repeatPassword: null,
  gender: null,
  file: null,
};

export default function UncontrolledForm() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const repeatPasswordRef = useRef<HTMLInputElement | null>(null);
  const tcRef = useRef<HTMLInputElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const countryRef = useRef<HTMLInputElement | null>(null);

  const [gender, setGender] = useState<string>();
  const [base64String, setBase64String] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string | null }>(
    DEFAULT_ERRORS
  );
  const [isErrors, setIsErrors] = useState<boolean>(false);

  const dispatch = useDispatch();

  const getUserData = () => {
    return {
      name: nameRef.current?.value,
      age: Number(ageRef.current?.value),
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      repeatPassword: repeatPasswordRef.current?.value,
      tc: tcRef.current?.checked,
      file: base64String,
      country: countryRef.current?.value,
      gender,
    };
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userData = getUserData();

    try {
      await userSchema.validate(userData, { abortEarly: false });

      dispatch(setUserData(userData));

      setErrors(DEFAULT_ERRORS);
      setSubmitted(true);
      setIsErrors(false);
    } catch (error) {
      const validationErrors: { [key: string]: string } = {};

      (error as unknown as ValidationError).inner.forEach((err) => {
        if (err?.path) {
          validationErrors[err.path] = err.message;
        }
      });

      setErrors(validationErrors);
      setSubmitted(false);
      setIsErrors(true);
    }
  };

  const handleValidation = async (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const userData = getUserData();

    try {
      await userSchema.validate(userData, { abortEarly: false });

      setErrors(DEFAULT_ERRORS);
      setIsErrors(false);
    } catch (error) {
      const validationErrors: { [key: string]: string } = {};

      (error as unknown as ValidationError).inner.forEach((err) => {
        if (err?.path) {
          validationErrors[err.path] = err.message;
        }
      });

      setErrors(validationErrors);
      setIsErrors(true);
    }
  };

  if (submitted) {
    return <Navigate to="/" replace />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        ref={nameRef}
        label="Name"
        name="name"
        id="uncontrolled-name"
        error={errors.name}
      />
      <NumberInput
        ref={ageRef}
        label="Age"
        name="age"
        id="uncontrolled-age"
        error={errors.age}
      />
      <EmailInput
        ref={emailRef}
        label="Email"
        name="email"
        id="uncontrolled-email"
        error={errors.email}
      />
      <Password
        ref={passwordRef}
        label="Password"
        name="pasword"
        id="uncontrolled-pasword"
        error={errors.password}
      />
      <Password
        ref={repeatPasswordRef}
        label="Repeat Password"
        name="repeat-pasword"
        id="uncontrolled-repeat-pasword"
        error={errors.repeatPassword}
      />
      <RadioButton
        label="Gender"
        options={[
          { id: 'm', name: 'male', value: 'male', label: 'Male' },
          { id: 'f', name: 'female', value: 'female', label: 'Female' },
          { id: 'o', name: 'other', value: 'other', label: 'Other' },
        ]}
        onChange={(value) => setGender(value)}
        error={errors.gender}
      />
      <label>Conditions</label>
      <Checkbox
        ref={tcRef}
        id="tc"
        name="tc"
        label="Terms and Conditions agreement"
      />
      <Uploader
        ref={fileRef}
        label="Upload Picture"
        name="file"
        id="uncontrolled-file"
        handleUpload={setBase64String}
        error={errors.file}
      />
      <CountryAutocomplete ref={countryRef} />
      <SubmitButton disabled={isErrors} />
      <button onClick={handleValidation}>Validate</button>
    </form>
  );
}
