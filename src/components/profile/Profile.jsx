import PT from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const statsEl = Object.entries(stats);
  return (
    <div className="profile">
      <div className={s.description}>
        <img src={avatar} alt={username} className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={s.stats}>
        {statsEl.map(el => (
          <li key={el[0]}>
            <span className="label">
              {el[0].replace(el[0][0], el[0][0].toUpperCase())}
            </span>
            <span className="quantity"> {el[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PT.string.isRequired,
  tag: PT.string.isRequired,
  location: PT.string.isRequired,
  avatar: PT.string.isRequired,
  stats: PT.shape({
    label: PT.number,
    views: PT.number,
    likes: PT.string,
  }),
};

export default Profile;
