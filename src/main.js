import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueScrollactive from 'vue-scrollactive';

import capitalize from './filters/capitalize.filter';
Vue.filter('capitalize', capitalize);


Vue.use(VueAxios, axios);
Vue.use(VueScrollactive);


Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
