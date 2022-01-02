import { useAuth } from 'hook/useAuth';
import React from 'react';
import { useAppSelector } from 'store/model';
const PublicProvider: React.FC = ({ children }) => {
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const { checkFlowLogin } = useAuth();
  React.useEffect(() => {
    if (isLogged === true) {
      // do nothing
    } else if (isLogged === null) {
      checkFlowLogin();
    }
  }, [isLogged]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default PublicProvider;
