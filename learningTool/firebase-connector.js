<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC7WhynbpygTuxeNHR_k7YbnM3bXb4IFqM",
    authDomain: "best-learning-tool-d5d6c.firebaseapp.com",
    projectId: "best-learning-tool-d5d6c",
    storageBucket: "best-learning-tool-d5d6c.appspot.com",
    messagingSenderId: "837115888525",
    appId: "1:837115888525:web:9d2522ff34617e0d3ef3c4",
    measurementId: "G-03BZ4J5ESZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
