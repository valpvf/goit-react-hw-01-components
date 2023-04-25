import PT from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const statsEl = Object.entries(stats);
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="{username}" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
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

Profile.PT = {
  username: PT.string.isRequired,
  tag: PT.string.isRequired,
  location: PT.string.isRequired,
  avatar: PT.string.isRequired,
  stats: PT.objectOf(PT.number).isRequired,
};

export default Profile;
