import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router';

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

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const userData = {
      name: nameRef.current?.value,
      age: ageRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      repeatPassword: repeatPasswordRef.current?.value,
      tc: tcRef.current?.checked,
      file: base64String,
      country: countryRef.current?.value,
      gender,
    };

    dispatch(setUserData(userData));

    setSubmitted(true);

    event.preventDefault();
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
      />
      <NumberInput ref={ageRef} label="Age" name="age" id="uncontrolled-age" />
      <EmailInput
        ref={emailRef}
        label="Email"
        name="email"
        id="uncontrolled-email"
      />
      <Password
        ref={passwordRef}
        label="Password"
        name="pasword"
        id="uncontrolled-pasword"
      />
      <Password
        ref={repeatPasswordRef}
        label="Repeat Password"
        name="repeat-pasword"
        id="uncontrolled-repeat-pasword"
      />
      <RadioButton
        label="Gender"
        options={[
          { id: 'm', name: 'male', value: 'male', label: 'Male' },
          { id: 'f', name: 'female', value: 'female', label: 'Female' },
          { id: 'o', name: 'other', value: 'other', label: 'Other' },
        ]}
        onChange={(value) => setGender(value)}
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
      />
      <CountryAutocomplete ref={countryRef} />
      <SubmitButton />
    </form>
  );
}
