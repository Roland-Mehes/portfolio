import { auth } from './fb';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const login = async (email, psw) => {
  try {
    return await signInWithEmailAndPassword(auth, email, psw);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw Error(errorMessage, errorCode);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    await fetch('/api/logout', {
      method: 'POST',
    });
  } catch (error) {
    throw new Error(error.message || 'Logout failed');
  }
};
