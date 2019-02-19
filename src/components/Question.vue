<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title" v-if="getQuestion">{{getQuestion.questionText}}</h5>
            <hr/>
            <Options v-if="getQuestion" v-bind:question="getQuestion"/>
            <hr/>
            <button class="btn btn-success btn-lg btn-block" @click="saveAnswer"><span class="save">SAVE ANSWER</span></button>
        </div>
    </div>
</template>

<script>
    import Options from '@/components/Options'

    export default {
        name: 'question',

        components: {
            Options
        },

        computed: {
            getQuestion() {
                /* 
                in the store.js, getQuestions returns an array of all questions
                this method returns a question based on the active question 
                */
                return this.$store.getters.getQuestions[this.$store.getters.getActiveQuestion]
            }
        },

        methods: {
            saveAnswer() {
                this.$store.dispatch("saveAnswer")
            }
        }
    }
</script>

<style scoped>
.save {
    font-weight: bold;
    letter-spacing: 2px;
}
</style>