import Checkbox from './form-elements/Checkbox';
import CountryAutocomplete from './form-elements/CountryAutocomplete';
import EmailInput from './form-elements/EmailInput';
import NumberInput from './form-elements/NumberInput';
import Password from './form-elements/Password';
import RadioButton from './form-elements/RadioButton';
import SubmitButton from './form-elements/SubmitButton';
import TextInput from './form-elements/TextInput';
import Uploader from './form-elements/Uploader';

export default function UncontrolledForm() {
  return (
    <form>
      <TextInput label="Name" name="name" id="uncontrolled-name" />
      <NumberInput label="Age" name="age" id="uncontrolled-age" />
      <EmailInput label="Email" name="email" id="uncontrolled-email" />
      <Password label="Password" name="pasword" id="uncontrolled-pasword" />
      <Password
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
      />
      <label>Conditions</label>
      <Checkbox id="tc" name="tc" label="Terms and Conditions agreement" />
      <Uploader label="Upload Picture" name="file" id="uncontrolled-file" />
      <CountryAutocomplete />
      <SubmitButton />
    </form>
  );
}
