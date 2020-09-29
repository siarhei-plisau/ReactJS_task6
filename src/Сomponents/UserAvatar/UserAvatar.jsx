import React from 'react';
import styles from './UserAvatar.module.scss';
import no_user from '../../Assets/img/no_user.png';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logOut } from '../../redux/actions';

function UserAvatar({ userData = {}, isAuthenticated, logOut }) {
  const { firstName, lastName, avatarImage } = userData;
  return (
    <div className={styles.userLogo}>
      <img src={isAuthenticated ? avatarImage : no_user} alt={isAuthenticated ? 'user photo' : 'no user'} />
      <p>{isAuthenticated ? `${firstName} ${lastName}` : ''}</p>
      { isAuthenticated ?
          <button onClick={() => logOut() }>Log Out</button> :
          null
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.access.isAuthenticated,
    userData: state.access.currentUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logOut: bindActionCreators(logOut, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserAvatar);

