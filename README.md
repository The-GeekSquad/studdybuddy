'StuddyBuddy' is a educational resource website developed by The Geek Squad. Its main aim is to motivate students, especially first generation low income students struggling financially, to study with full concentration.
------------------------------------------------------------------------
Features include:
- Flashcard Creator, Reviewer and AI Generator & Quizzer
- Study Timer
- XP system
- Customized themes that can be unlocked with earned XP
------------------------------------------------------------------------
Technologies used:
- HTML
- CSS 
- node.js
- JavaScript
- Google Firebase
- Groq
------------------------------------------------------------------------
SETUP STEPS:
1. Download project
2. Download & install NodeJS from their official website
3. Open a terminal window in the directory/folder of the project
4. Run the command `npm install` in the terminal to install the dependencies required for this app
5. Go to Google Firebase and create an app and set up Auth and Firestore
6. Go to the `/src/index.js` file in the project's directory/folder and modify the Firebase config variable to meet your Firebase app's information (you should get this information during the process of creating your app or setting it up with Auth and Firestore)
7. Go to `https://console.groq.com/keys` and create an API key
8. Create a file called `.env` in the project's directory/folder and add two keys in in separate lines that match your API keys
`FIREBASE_API_KEY = YOUR KEY HERE`
`GROQ_API_KEY = YOUR KEY HERE`
9. In the terminal, run the command `npm run build` to build the Javascript code that you modified
10. In your file browser, double click `index.html` to launch the app in a browser of your choice
