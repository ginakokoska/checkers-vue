import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router/route.js';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import './registerServiceWorker'

import { faChess } from '@fortawesome/free-solid-svg-icons'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt} from '@fortawesome/free-brands-svg-icons'
import { faChessQueen} from '@fortawesome/free-solid-svg-icons'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import {faChessKing} from '@fortawesome/free-regular-svg-icons'
import firebase from 'firebase/app'

library.add(faChess, faIgloo, faGithubAlt, faClipboardList, faChessQueen, faChessKing)



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-KZgtx1dRkE-i9Ecb6MeF4Gh_8aW1KBs",
    authDomain: "checkers-vue.firebaseapp.com",
    projectId: "checkers-vue",
    storageBucket: "checkers-vue.appspot.com",
    messagingSenderId: "1078246661435",
    appId: "1:1078246661435:web:39ce428886443bc2e8ab1e",
    measurementId: "G-J5JQ4DM02Z"
};
firebase.initializeApp(firebaseConfig)



const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount('#app')
