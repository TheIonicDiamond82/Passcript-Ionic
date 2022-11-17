// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initialize } from "@ionic/core";
import { initializeApp } from "firebase/app";



export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCGLDWPpQx0mWmcmDQ5tOcGG_34KUUvAzM",
    authDomain: "passcript-a109a.firebaseapp.com",
    projectId: "passcript-a109a",
    storageBucket: "passcript-a109a.appspot.com",
    messagingSenderId: "872698461219",
    appId: "1:872698461219:web:66b2c4621eeac09a410596",
    measurementId: "G-TK38XTGF0Q"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
