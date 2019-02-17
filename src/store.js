import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex, Axios)

export default new Vuex.Store({
    state: {
        testTakerEmail: '',
        activeQuestion: 0,
        testQuestions: []
    },

    getters: {
        getTestTakerEmail(state) {
            return state.testTakerEmail
        },

        getQuestions(state) {
            return state.testQuestions
        },

        getActiveQuestion(state) {
            return state.activeQuestion
        }
    },

    mutations: {
        setTestTakerEmail(state, email) {
            state.testTakerEmail = email
        },

        setTestQuestion(state, questions) {
            state.testQuestions = questions
            console.log(state.testQuestions)
        },

        setActiveQuestion(state, change) {
            if (change.isReset == true) {
                state.activeQuestion = 0
                state.activeQuestion = change.value
                console.log("reset")
            } else {
                state.activeQuestion = state.activeQuestion + change.value
                console.log("change")
            }
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