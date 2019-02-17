import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex, Axios)

export default new Vuex.Store({
    state: {
        testTakerEmail: ''
    },

    getters: {
        getTestTakerEmail(state) {
            return state.testTakerEmail
        }
    },

    mutations: {
        setTestTakerEmail(state, email) {
            state.testTakerEmail = email
        }
    }
})