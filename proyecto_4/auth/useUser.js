import { useEffect, useState } from 'react';
import Router  from 'next/router';
import {getAuth} from 'firebase/auth';

import initFirebase from '../config/firebase-config';
import {
  removeUserCookie,
  setUserCookie,
  getUserFromCookie
} from './userCookie';

const app = initFirebase();
const auth = getAuth(app)
export const mapUserData = async user => {
  const { uid, email } = user;
  const token = await user.getIdToken(true);
  return {
    id: uid,
    email,
    token
  };
};

  
const useUser = () => {
  const [user, setUser] = useState();

  const logout = async () => {
    return auth
      .signOut()
      .then(() => {
        Router.push('/');
      })
      .catch(e => {
        console.error(e);
      });
  };

  useEffect(() => {
    const cancelAuthListener = auth
      .onIdTokenChanged(async userToken => {
        if (userToken) {
          const userData = await mapUserData(userToken);
          setUserCookie(userData);
          setUser(userData);
        } else {
          removeUserCookie();
          setUser();
        }
      });

    const userFromCookie = getUserFromCookie();
    if (!userFromCookie) {
      return;
    }
    setUser(userFromCookie);
    return () => cancelAuthListener;
  }, []);

  return { user, logout };
};

export { useUser };
