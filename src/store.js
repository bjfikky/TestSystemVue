import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex, Axios)

export default new Vuex.Store({
    state: {
        testTakerEmail: '',
        activeQuestion: 0,
        selectedOption: null,
        testQuestions: [],
        savedOptions: [],
        numberOfAnsweredQuestions: 0
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
        },

        getSelectedOption(state) {
            return state.selectedOption
        },

        getSavedOptions(state) {
            return state.savedOptions
        },

        getNumAnsweredQuestions(state) {
            return state.numberOfAnsweredQuestions
        }
    },

    mutations: {
        setTestTakerEmail(state, email) {
            state.testTakerEmail = email
        },

        setTestQuestion(state, questions) {
            state.testQuestions = questions
            //console.log(state.testQuestions)
        },

        setActiveQuestion(state, change) {
            if (change.isReset == true) {
                state.activeQuestion = 0
                state.activeQuestion = change.value
                //console.log("reset")
            } else {
                state.activeQuestion = state.activeQuestion + change.value
                //console.log("change")
            }
        }, 

        setSelectedOption(state, optionId) {
            state.selectedOption = optionId
        },

        setSavedOptions(state, optionId) {
            state.testQuestions[state.activeQuestion].answerSaved = true

            state.savedOptions.push(optionId)
            state.activeQuestion += 1
            //console.log("Answer saved!")
        },

        setOptionSelected(state, optionId) {
            state.testQuestions.forEach(testQuestion => {
                testQuestion.options.forEach(option => {

                    // Deselect any other option that has already been selected
                    option.selected = false

                    if (option.id == optionId) {

                        // Select an option
                        option.selected = true
                    }
                });
                
            });
        },

        setNumberOfAnsweredQuestions(state) {
            state.numberOfAnsweredQuestions++
        }
    },

    actions: {
        getQuestions({commit}) {
            Axios.get("https://localhost:5001/api/questions").then(result => {               
                commit("setTestQuestion", result.data)
            })
        },

        saveAnswer({commit, state}) {
            Axios.post("https://localhost:5001/api/answers",{
                "email": state.testTakerEmail,
                "optionid": state.selectedOption
            }).then(
                commit("setSavedOptions", state.selectedOption),
                commit("setNumberOfAnsweredQuestions")
                // console.log("Answer saved")
            )
        }
    }
})