import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import commentsModule from "./modules/comments";
import messagesModule from "./modules/messages";

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {},
    mutations: {},
    actions: {},
    modules: {
        commentsModule,
        messagesModule,
    },
});
