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
import { createAuth0 } from '@auth0/auth0-vue';

library.add(faChess, faIgloo, faGithubAlt, faClipboardList, faChessQueen, faChessKing)


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(
    router,
    createAuth0({
        domain: "dev-a03ymdkbm076cgln.us.auth0.com",
        client_id: "aXtwE4P2ffKgYHM3iezRJXiMbrAXiJIE",
        redirect_uri: window.location.origin
    })
);

app.mount('#app')
