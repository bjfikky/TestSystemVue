<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title" v-if="getQuestion">{{getQuestion.questionText}}</h5>
            <hr/>
            <Options v-if="getQuestion" v-bind:options="getQuestion.options"/>
            <hr/>
            <button class="btn btn-success btn-lg btn-block"><span class="save">SAVE ANSWER</span></button>
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
                return this.$store.getters.getQuestions[this.$store.getters.getActiveQuestion]
            }
        },

        
    }
</script>

<style scoped>
.save {
    font-weight: bold;
    letter-spacing: 2px;
}
</style>