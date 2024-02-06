    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCOXX2R4nCyVbvtlUdCFZ6Q2H_DDu3gFHI",
      authDomain: "nutrihabits-8d21c.firebaseapp.com",
      projectId: "nutrihabits-8d21c",
      storageBucket: "nutrihabits-8d21c.appspot.com",
      messagingSenderId: "886653529912",
      appId: "1:886653529912:web:a9fa02f3699bb5ac1edbcd",
      measurementId: "G-DXKBCLSQD1"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);