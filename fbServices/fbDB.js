import { db } from './fb';
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
} from 'firebase/firestore';

export const writeUserData = async (userId, data) => {
  const userRef = doc(db, 'users', userId);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    await updateDoc(userRef, data);
  } else {
    await setDoc(userRef, data);
  }
};

export const readUserData = async (userId) => {
  const userRef = doc(db, 'users', userId);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    return userSnap.data();
  } else {
    console.warn('No user data found for UID:', userId);
    return null;
  }
};

export const readAllUsersData = async () => {
  const usersCollectionRef = collection(db, 'users');
  try {
    const querySnapshot = await getDocs(usersCollectionRef);
    const usersData = {};
    querySnapshot.forEach((doc) => {
      usersData[doc.id] = doc.data();
    });
    return usersData;
  } catch (error) {
    console.error('Error fetching all users data:', error);
    return {};
  }
};
