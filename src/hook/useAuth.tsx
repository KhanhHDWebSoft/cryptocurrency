import { authAction } from 'store/auth/action';
import { useAppDispatch, useAppSelector } from 'store/model';
import { useRouter } from 'next/router';

export const useAuth = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const checkFlowLogin = async () => {
    // dispatch(appAction.showLoading());
    // const isRemember = localStorage.getItem('remember');
    // if (isRemember) {
    //   await checkRefreshToken(logOut);
    // }
    getProfile();
    // dispatch(appAction.hideLoading());
  };

  const getProfile = async () => {
    dispatch(authAction.getMyProfile());
  };

  const logOut = async (keepUrl = true) => {
    try {
      // Do noting
      if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
        if (keepUrl) {
          router.push(`/login/?redirect_url=${window.location.pathname}${window.location.search}`);
        } else {
          router.push('/login');
        }
      }
    } finally {
    }
  };

  return { checkFlowLogin, getProfile, logOut };
};
