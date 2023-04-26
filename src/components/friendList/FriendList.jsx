import { ItemStyled, ImageStyled, StatusStyled } from './FriendList.styled';

const FriendList = friends => {  
  return (
    <ul className="friend-list">
      {friends.friends.map(el => (
        <ItemStyled key={el.id}>
          <StatusStyled>{el.isOnline}</StatusStyled>
          <ImageStyled src={el.avatar} alt={el.name} width="48" height="48" />
          <p className="name">{el.name}</p>
        </ItemStyled>
      ))}
    </ul>
  );
};

export default FriendList;
