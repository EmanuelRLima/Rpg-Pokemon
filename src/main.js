import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import VueTilt from "vue-tilt.js";
import VueSweetalert2 from "vue-sweetalert2";
import mitt from "mitt";
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/mdc-light-indigo/theme.css'
import 'primeicons/primeicons.css'
import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row'; 
import InputText from 'primevue/inputtext';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

const appInstance = createApp(App);
appInstance.use(PrimeVue)
appInstance.use(ToastService)
appInstance.component('DataTable', DataTable)
appInstance.component('Column', Column)
appInstance.component('ColumnGroup', ColumnGroup)
appInstance.component('InputText', InputText)
appInstance.component('Row', Row)
appInstance.component('Buttonprime', Button)
appInstance.component('Toast', Toast)
const emitter = mitt();
appInstance.config.globalProperties.emitter = emitter;
appInstance.use(store);
appInstance.use(router);
appInstance.use(VueTilt);
appInstance.use(VueSweetalert2);
appInstance.mount("#app");
