import PT from 'prop-types';
import { ItemStyled, ImageStyled, StatusStyled } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(el => (
        <ItemStyled key={el.id}>
          <StatusStyled>{el.isOnline}</StatusStyled>
          <ImageStyled src={el.avatar} alt={el.name} width="48" height="48" />
          <p className="name">{el.name}</p>
        </ItemStyled>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PT.arrayOf(
    PT.shape({
      isOnline: PT.bool,
      avatar: PT.string,
      name: PT.string,
    })
  ),
};

export default FriendList;
