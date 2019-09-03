import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  async register({ name, email, password }) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    return await newUser.user.updateProfile({
      displayName: name
    });
  }

  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    await this.auth.signOut();
  }

  async resetPassword(email) {
    await this.auth.sendPasswordResetEmail(email);
  }

  async signInWithGoogle() {
    const provider = new this.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    //
    const handleSignInWithGoogle = () => {
      // this.auth.signInWithPopup(provider);
    };
    handleSignInWithGoogle();
  }

  async createUserProfileDocument(userAuth, additionalData) {
    if (!userAuth) return;

    //
    const userRef = this.db.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log("error creating user", error.message);
      }
    }

    return userRef;
  }
}

const firebase = new Firebase();
export default firebase;
