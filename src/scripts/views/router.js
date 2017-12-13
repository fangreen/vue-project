import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Recommend from "./recommend.vue";
import Layout from "./layout.vue";
import Page from "./page.vue";
import Classify from "./classify.vue";
import Download from "./download.vue";
import Search from "./search.vue"
import Details from "./details.vue"
var routes = [
    {
        path:"/search",
        component:Search
    },
    {
        path:"/details?:id",
        name:"details",
        component:Details
    },
    {
        path:"/",
        component:Layout,
        children:[
            {path:"recommend",name:"recommend",component:Recommend},
            {path:"page",name:"page",component:Page},
            {path:"classify",name:"classify",component:Classify},
            {path:"download",name:"download",component:Download},
            {path:"*",redirect:"/recommend"},
        ]
    },
]
const router = new VueRouter({
    mode:"hash",
    routes
});


export default router;