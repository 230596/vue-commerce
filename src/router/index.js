import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue';
import Detailproduct from '../views/Detailproduct.vue';
import Shoppingcart from '../views/Shoppingcart.vue';
import Succes from '../views/Succes.vue';

Vue.use(VueRouter)

const routes = [{
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/product",
        name: "detailproduct",
        component: Detailproduct
    },
    {
        path: "/cart",
        name: "cart",
        component: Shoppingcart
    },
    {
        path: "/succes",
        name: "succes",
        component: Succes
    }
]

const router = new VueRouter({
    routes
})

export default router