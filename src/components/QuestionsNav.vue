<template>
    <div>
        <div class="flex-container">
            <button class="btn btn-outline-secondary">Previous</button>
            <h6><span class="question-count">10</span>/<span class="question-count">20</span></h6>
            <button class="btn btn-outline-success">Next</button>
        </div>
        <div class="numbers">
            <span class="number green">01</span>
            <span class="number green">02</span>
            <span class="number green">03</span>
            <span class="number green">04</span>
            <span class="number green">05</span>
            <span class="number green">06</span>
            <span class="number green">07</span>
            <span class="number green">08</span>
            <span class="number green">09</span>
            <span class="number red active-question">10</span>
            <span class="number red">11</span>
            <span class="number red">12</span>
            <span class="number red">13</span> 
            <span class="number red">14</span>
            <span class="number red">15</span>
            <span class="number red">16</span>
            <span class="number red">17</span>
            <span class="number red">18</span>
            <span class="number red">19</span>
            <span class="number red">20</span>
        </div>
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