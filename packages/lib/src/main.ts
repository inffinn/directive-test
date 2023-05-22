import LazyComponent from './components/LazyComponent.vue'
import VueLazyload from 'vue-lazyload';

export default {
    install(app, options) {
        app.use(VueLazyload, {
          preLoad: 1.3,
          observer: true,
          //loading: '/src/assets/preloader.gif', // TODO: temp gif
        });
        app.component('LazyComponent', LazyComponent)
        app.directive('color', (el, binding) => {
            // this will be called for both `mounted` and `updated`
            el.style.backgroundColor = 'red'
        })
        // configure the app
    }
}
