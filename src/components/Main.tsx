import { NavLink } from 'react-router';

export default function Main() {
  return (
    <>
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
    </>
  );
}
