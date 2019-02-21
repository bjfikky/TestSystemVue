<template>
    <div>
        <div class="flex-container">
            <button v-bind:class="[getActiveQuestion == 0 ? 'invisible' : 'visible', 'btn', 'btn-outline-secondary']" @click="changeQuestion({value:-1, isReset:false})">Previous</button>

            <h6><span class="question-count">{{getNumOfAnsweredQuestions}}</span>/<span class="question-count">{{getQuestions.length}}</span></h6>

            <button v-bind:class="[getActiveQuestion < getQuestions.length - 1 ? 'visible' : 'invisible','btn', 'btn-outline-success']" @click="changeQuestion({value:1, isReset:false})">Next</button>
        </div>
        <div class="numbers">
            <span v-bind:class="[index == getActiveQuestion ? 'active-question' : '' ,'number' , getQuestions[index].answerSaved ? 'green':'red']" v-for="(question, index) in getQuestions" v-bind:key="index" @click="changeQuestion({value:index, isReset:true})">{{index + 1}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'questionNav',

        computed: {
            getQuestions() {
                return this.$store.getters.getQuestions
            },

            getActiveQuestion() {
                return this.$store.getters.getActiveQuestion
            },
            
            getNumOfAnsweredQuestions() {
                return this.$store.getters.getNumAnsweredQuestions
            }
        },

        methods: {
            changeQuestion(change) {
                this.$store.commit("setActiveQuestion", change)
            },

            
        }
    }
</script>

<style scoped>
.flex-container {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
}

.numbers {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.number {
    padding: 10px 14px;
    font-size: 12px;
    font-style: italic;
}
.number:hover {
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
}

.green {
    color: green;
}

.red {
    color:red;
}

.active-question {
    border: 1px solid grey;
    border-radius: 15px;
}

.question-count {
    padding: 0 5px;
}

button {
    width: 100px;
}
</style>