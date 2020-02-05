import * as firebase from 'firebase'
// import * as admin from 'firebase-admin';
import 'firebase/firestore'

export class FirebaseWrapper {
  constructor() {
    this.initialized = false
    this._firebaseInstance = null // instance of our npm package
    this._firebaseWrapperInstance = null // instance of our wrapper
    this._firestore = null
  }

  Initialize(config) {
    if (!this.initialized) {
      // initialize firebase
      this._firebaseInstance = firebase.initializeApp(config)
      this._firestore = firebase.firestore()
      this.initialized = true

      console.log('Firebase has been initialized, woohoo!')
    }
  }
}
