import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';
import { IState } from '../app/store';
import UserData from './UserData';

export default function Main() {
  const userDataForm1 = useSelector((state: IState) => state.userData);

  return (
    <>
      <section>
        <h2>Navigation Links</h2>
        <h2>
          <NavLink to="/uncontrolled-form" end>
            1 Form. Uncontrolled components approach
          </NavLink>
        </h2>
        <h2>
          <NavLink to="/hook-form" end>
            2 Form. React Hook Form
          </NavLink>
        </h2>
      </section>
      {!!userDataForm1.length && (
        <UserData label="User Data. Form 1" data={userDataForm1} />
      )}
    </>
  );
}
