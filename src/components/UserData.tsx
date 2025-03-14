import { IUserData } from '../app/store';

interface IUserDataProps {
  data: IUserData[];
  label: string;
}

export default function UserData({ data, label }: IUserDataProps) {
  return (
    <section className="user-wrapper">
      <h2>{label}</h2>
      {data.map((item, index) => (
        <div
          className={`user-wrapper ${index === data.length - 1 && 'new-user-data-wrapper'}`}
          key={`${label}-${index}`}
        >
          <h3>Tile {index + 1}</h3>
          <p>
            <b>Name:</b> {item.name}
          </p>
          <p>
            <b>Age:</b> {item.age}
          </p>
          <p>
            <b>Email:</b> {item.email}
          </p>
          <p>
            <b>Password:</b> {item.password}
          </p>
          <p>
            <b>Gender:</b> {item.gender}
          </p>
          <p>
            <b>Terms and Conditions agreement is accepted:</b>{' '}
            {item.tc ? 'yes' : 'no'}
          </p>
          <p>
            <b>Picture:</b>{' '}
          </p>
          <img className="user-img" src={item.file ? item.file : undefined} />
          <p>
            <b>Country:</b> {item.country}
          </p>
        </div>
      ))}
    </section>
  );
}
