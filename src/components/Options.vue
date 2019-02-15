<template>
    <div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
            <label class="form-check-label" for="exampleRadios1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit didunt ut labore et dolore magna
            </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
            <label class="form-check-label" for="exampleRadios2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3">
            <label class="form-check-label" for="exampleRadios3">
                Leleniti corporis eos recusandae alias omnis, ratione autem inventore, porro est sequi. 
            </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4">
            <label class="form-check-label" for="exampleRadios4">
                Disabled dolor sit amet consectetur adipisicing elit. Quis praesentium fuga ipsum vitae in expedita eaque sit amet
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'options'
    }
</script>

<style scoped>
.form-check {
    padding: 10px 40px;
}
</style>