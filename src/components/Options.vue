<template>
    <div>
        <div class="form-check" v-for="(option, index) in question.options" v-bind:key="index">           
            <input class="form-check-input invisible" type="radio" v-bind:name="option.text + option.id" @click="selectOption(option.id)" v-model="selectValue" 
                v-bind:id="option.text + option.id" v-bind:value="option.id" 
            >
            
            <label v-bind:class="['form-check-label', 'option', option.selected ? 'selected' : '', savedOptions.includes(option.id) ? 'saved' : '']" 
                v-bind:for="option.text + option.id" @click="markOption(option.id)"
            >
                {{option.text}} 
            </label>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios'

    export default {
        name: 'options',
        data() {
            return {
                selectValue: this.$store.getters.getSelectedOption,
                clickState: false,
                savedOptions: []
            }
        },

        props: ['question'],
        
        updated() {
            this.getSavedOptions()
        },

        computed: {
            getSelectedOptions() {
                return this.$store.getters.getSavedOptions
            }
        },
        
        methods: {
            selectOption(id) {
                this.$store.commit("setSelectedOption", id)
            }, 

            addChecked(optionId) {
                return this.$store.getters.getSavedOptions.includes(optionId)
            },

            optionClicked() {
                !this.clickState
                console.log("option selected")
            },

            markOption(optionId) {
                this.$store.commit("setOptionSelected", optionId)
            },

            getSavedOptions() {
                let email = this.$store.getters.getTestTakerEmail

                Axios.get(`https://localhost:5001/api/answers/${email}`).then(result => {
                    let answers = result.data

                    let savedOptions = []

                    answers.forEach(answer => {
                        savedOptions.push(answer.optionId)
                    });
                    
                    this.savedOptions = savedOptions

                })
            }
        }
    }
</script>

<style >
.form-check {
    padding: 10px 40px;
}

.saved {
    border: 1px solid green !important;
    border-radius: 5px;
}

.selected {
    padding: 9px !important;
    border: 1px solid #fc8b09;
    border-radius: 5px;
}

.option {
    padding: 10px;
}

.option:hover {
    padding: 9px;
    border: 1px solid #fc8b09;
    border-radius: 5px;
}

.selected:hover {
    padding: 10px;
}
</style>