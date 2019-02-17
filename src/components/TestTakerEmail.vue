<template>
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <div class="form-group">
                <label for="email">Your Email</label>
                <input type="text" v-model="email" name="email" id="email" class="form-control" placeholder="johndoe@email.com"/>
                <button class="btn btn-success btn-block start-test" @click="startTest()">Start Test</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TestTakerEmail',

        data() {
            return {
                email: ''
            }
        },

        methods: {
            startTest() {
                this.$store.commit("setTestTakerEmail", this.email)
            }
        }
    }
</script>

<style scoped>
    .start-test {
        margin: 10px 0;
    }
</style>