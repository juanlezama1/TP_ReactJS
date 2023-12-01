import { initializeApp} from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyApkCQq9Jj9jnvNlfNmZeOy5TkjsJOf7f0",
    authDomain: "ecommerce-react-js-605cc.firebaseapp.com",
    projectId: "ecommerce-react-js-605cc",
    storageBucket: "ecommerce-react-js-605cc.appspot.com",
    messagingSenderId: "401710948165",
    appId: "1:401710948165:web:93c1fc2bc19f16af78282c"
  };

  const app = initializeApp(firebaseConfig);

  // Mi base de datos
  export const db = getFirestore(app);