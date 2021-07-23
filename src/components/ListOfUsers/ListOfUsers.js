import PropTypes from 'prop-types';
import chewbacca from 'assets/chewbacca.jpg';
import { Avatar, Info, Item, List, Names } from './elements';

function ListOfUsers({ listOfUsers }) {
  if (listOfUsers.length === 0) {
    return null;
  }

  return (
    <section>
      <List>
        {listOfUsers.map(({ email, id, name, username }) => (
          <Item key={id}>
            <Avatar src={chewbacca} alt="Chewbacca Avatar" />
            <Info>
              <Names>
                <strong>{name}</strong>
                <i>{username}</i>
              </Names>
              <a href="mailto:{email}">{email}</a>
            </Info>
          </Item>
        ))}
      </List>
    </section>
  );
}

ListOfUsers.propTypes = {
  listOfUsers: PropTypes.array,
};

ListOfUsers.defaultProps = {
  listOfUsers: [],
};

export default ListOfUsers;
