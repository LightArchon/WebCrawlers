import Vue from "vue";
import Vuex from "vuex";
import { mapGetters } from "vuex";

import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);
var state = {};
var getters = {};
export default new Vuex.Store({
  // ...
  state,
  getters,
  actions,
  mutations
});
