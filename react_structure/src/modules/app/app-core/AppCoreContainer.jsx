import {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import PropTypes from 'prop-types';
// --- Import utils
import createSelector from '~/utils/automations/createSelector';
// --- Import modules
// --- Main files
import appCoreSelectors from './appCoreSelectors';
import appCoreActions from './appCoreActions';
// ---
const mapStateToProp = createSelector({
  authData: appCoreSelectors.authDataSelector,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onAuthLogin: appCoreActions.authLogin,
      onAuthLogout: appCoreActions.authLogout,
    },
    dispatch,
  );

const AppCoreContainer = props => {
  const {render, authData, onAuthLogin, onAuthLogout} = props;

  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const handleSetEmailLogin = value => {
    setEmailLogin(value);
  };

  const handleSetPasswordLogin = value => {
    setPasswordLogin(value);
  };

  const handleLogin = () => {
    onAuthLogin({
      email: emailLogin,
      password: passwordLogin,
    });
  };

  return render({
    // --- state
    // --- props
    authData,
    emailLogin,
    passwordLogin,
    // --- function
    onSetEmailLogin: handleSetEmailLogin,
    onSetPasswordLogin: handleSetPasswordLogin,
    onLogin: handleLogin,
    onAuthLogout,
  });
};

AppCoreContainer.propTypes = {
  render: PropTypes.func.isRequired,
};

export default compose(connect(mapStateToProp, mapDispatchToProps))(
  AppCoreContainer,
);
