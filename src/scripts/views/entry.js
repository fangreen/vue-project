
import Vue from "vue";
import vueResource from "vue-resource";
Vue.use(vueResource);

import Vuex from "vuex";
Vue.use(Vuex);
import store from "../vuex/store.js";
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper)
import router from "./router";
import {mapState} from "vuex"; 

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './ui.js'
Vue.use(Mint);

const app = new Vue({
    el:"#app",
    data:{ 
            transitionName:"slide-right"
    },
    router,
    store,
    watch:{
        "$route":function(to,from){
            if(to.path=="/search"||to.path=="/details"){
                this.transitionName="slide-right";
            }else{
                this.transitionName="slide-left";
            }
        }
    }
    
})