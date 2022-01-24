import Vue from "vue";
import Vuex from "vuex";
import commentsModule from "./modules/comments";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
      commentsModule,
    },
});
