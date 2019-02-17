import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex, Axios)

export default new Vuex.Store({
    state: {
        testTakerEmail: '',
        testQuestions: []
    },

    getters: {
        getTestTakerEmail(state) {
            return state.testTakerEmail
        },

        getQuestions(state) {
            return state.testQuestions
        }
    },

    mutations: {
        setTestTakerEmail(state, email) {
            state.testTakerEmail = email
        },

        setTestQuestion(state, questions) {
            state.testQuestions = questions
            console.log(state.testQuestions)
        }
    },

    actions: {
        getQuestions({commit}) {
            Axios.get("https://localhost:5001/api/questions").then(result => {               
                commit("setTestQuestion", result.data)
            })
        }
    }
})