import Vue from 'vue';
import { Toast, Lazyload } from 'vant';
import { Image as VanImage } from 'vant';
import 'vant/lib/index.css';

Vue.use(Toast);
Vue.use(VanImage);
Vue.use(Lazyload);

Vue.prototype.$Toast = Toast