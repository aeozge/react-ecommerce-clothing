// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDT4U12Cmr_-oV3MBz-K5Mdgk9VC1UHBjo",
  authDomain: "crwn-clothing-db-fc683.firebaseapp.com",
  projectId: "crwn-clothing-db-fc683",
  storageBucket: "crwn-clothing-db-fc683.appspot.com",
  messagingSenderId: "255082844275",
  appId: "1:255082844275:web:fafb1aff6409907cbfda06",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Setting up provider which always force somebody(interacts with our provider) to select an account.
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// Create the database
export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};



export const getCategoriesAndDocuments = async() => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef);

  const quesySnapshot = await getDocs(q);
  const categoryMap = quesySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
  return categoryMap;
}

// Async func that recieves some user authentication object
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  // see if there is an existing document reference :
  // doc takes 3 arguments; database, collections, some identifier
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  // snapshot checks instance of userDocRef that exists inside of a db
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  // and allows us to access the data.
  console.log(userSnapShot.exists());

  // if user data doesn't exist
  if (!userSnapShot.exists()) {
    // set the doc with data from userAuth in my collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error : creating the user", error.message);
    }
  }
  //if user data exists
  //return userDocRef
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
