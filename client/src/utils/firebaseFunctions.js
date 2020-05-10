import firebase from "../firebase";

export const login = (email, password) =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => console.log(res));

export const logout = () => firebase.auth().signOut();

export const signUp = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const getFirebaseIdToken = () =>
  firebase.auth().currentUser.getIdToken(false);
