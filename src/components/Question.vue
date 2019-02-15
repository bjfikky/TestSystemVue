<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ?</h5>
            <hr/>
            <Options/>
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
        }
    }
</script>

<style scoped>
.save {
    font-weight: bold;
    letter-spacing: 2px;
}
</style>