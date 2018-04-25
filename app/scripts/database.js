import firebase from 'firebase'

const database = {
  config: {
    apiKey: "AIzaSyBHMMMLtzj-x2i2vyPS2nkq20W1mGzRFn8",
    authDomain: "buycantaba-referral.firebaseapp.com",
    databaseURL: "https://buycantaba-referral.firebaseio.com",
    projectId: "buycantaba-referral",
    storageBucket: "buycantaba-referral.appspot.com",
    messagingSenderId: "1090518578499"
  },
  init() {
    firebase.initializeApp(this.config)
  }
}

export default database
