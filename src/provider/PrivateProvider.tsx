import { useAuth } from 'hook/useAuth';
import React from 'react';
import { useAppSelector } from 'store/model';

const PrivateProvider: React.FC = (props) => {
  const { children } = props;

  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const { checkFlowLogin, logOut } = useAuth();

  const checkAuth = async () => {
    if (isLogged === false) {
      // do nothing
      logOut();
    } else if (isLogged === null) {
      await checkFlowLogin();
    } else {
      // keep login
    }
  };

  React.useEffect(() => {
    checkAuth();
  }, [isLogged]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default PrivateProvider;
