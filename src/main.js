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

library.add(faChess, faIgloo, faGithubAlt, faClipboardList, faChessQueen, faChessKing)


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount('#app')
