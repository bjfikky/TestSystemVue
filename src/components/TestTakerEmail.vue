<template>
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <div class="form-group">
                <label for="email">Your Email</label>
                <input type="text" v-model="email" @focus="clearEmailError()" name="email" id="email" class="form-control" placeholder="johndoe@email.com"/>
                <button class="btn btn-success btn-block start-test" @click="startTest()">Start Test</button>
                <span v-if="error" class="text-danger">{{error}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import validator from 'validator'

    export default {
        name: 'TestTakerEmail',

        data() {
            return {
                email: '',
                error: ''
            }
        },

        methods: {
            startTest() {
                if (!validator.isEmail(this.email)) {
                    this.error = "* Please enter a valid email"
                } else {
                    this.$store.commit("setTestTakerEmail", this.email)
                    this.$store.dispatch('getQuestions')
                }
            },

            clearEmailError() {
                this.error = ''
            }
        }
    }
</script>

<style scoped>
    .start-test {
        margin: 10px 0;
    }
</style>