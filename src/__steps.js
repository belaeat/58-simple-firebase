/* 
    ---------------------------------------
                INITIAL SETUP
    ---------------------------------------

    1. Visit: console.firebase.google.com

    2. Create project (skip google analytics).

    3. Register app (create config).

    4. Install firebase: npm install firebase.

    5. Add config file to your project.

    6. DANGER: Do not publish or make firebase config to public by pushing those to github.

    ---------------------------------------
                  INTEGRATION
    ---------------------------------------    

    7. Go to Docs > Build > Authentication > Web > Get Started.

    8. Export app from the firebase.config.js file: export default app;

    9. Login.jsx : import getAuth from firebase/auth

    10. Create const auth = getAuth (app);

    ---------------------------------------
                PROVIDER SETUP
    ---------------------------------------

    11. import GoogleAuthProvider and create a new provider.

    12. use signInWithPopUp and pass auth and provider.

    13. activate sign-in method (facebook, google, github etc).

    14. [vite]: change 127.0.0.1 to localhost

    ---------------------------------------
                MORE AUTH PROVIDER
    ---------------------------------------

    1. Activate the auth provider (create app, provide redirect url, client id, client secret).

    2. 
*/