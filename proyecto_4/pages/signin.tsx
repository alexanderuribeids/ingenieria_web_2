import StyledFirebaseAuth from './StyledFirebaseAuth';
import initFirebase from '../config/firebase-config';
import { setUserCookie } from '../auth/userCookie';
import { mapUserData } from '../auth/useUser';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const app = initFirebase();
const auth = getAuth(app);
const firebaseAuthConfig = ({ signInSuccessUrl }) => ({
  signInFlow: 'popup',
  popupMode: true,
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl,
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
      const userData = await mapUserData(user);
      setUserCookie(userData);
      console.log("registrar usuario en la base")     
    }
  }
});

const FirebaseAuth = (props) => {
  const signInSuccessUrl = "/"
  return (
    <div>
      <StyledFirebaseAuth
        uiConfig={firebaseAuthConfig({ signInSuccessUrl })}
        firebaseAuth={auth}
        signInSuccessUrl={signInSuccessUrl}
      />
    </div>
  );
};

export default FirebaseAuth;
