import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/app'
import 'firebase/auth'

import './main.css'

const firebaseConfig = {
  apiKey: "AIzaSyCEMJu1b9YT6NLGA61oXcP5bAlZ2BcJ1fM",
  authDomain: "solander-map.firebaseapp.com",
  databaseURL: "https://solander-map.firebaseio.com",
  projectId: "solander-map",
  storageBucket: "solander-map.appspot.com",
  messagingSenderId: "753451213856",
  appId: "1:753451213856:web:10692ea13060b9efe30845",
  measurementId: "G-4BGDN4MV98"
};

firebase.initializeApp(firebaseConfig)
firebase.auth().useDeviceLanguage();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);