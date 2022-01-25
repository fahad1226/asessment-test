import Messages from "@/components/messages/Message.vue";
import Comments from "@/views/Home.vue";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
    {
        path: "/comments",
        name: "comments",
        component: Comments,
    },
    {
        path: "/messages",
        name: "messages",
        component: Messages,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
