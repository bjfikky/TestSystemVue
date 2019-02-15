<template>
    <div class="flex-container">
        <button class="btn btn-outline-secondary">Previous</button>
        <h6>04/20</h6>
        <button class="btn btn-outline-success">Next</button>
    </div>
</template>

<script>
    export default {
        name: 'questionNav'
    }
</script>

<style scoped>
.flex-container {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
}

button {
    width: 100px;
}
</style>