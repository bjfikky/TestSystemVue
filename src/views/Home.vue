<template>
  <div class="home">
    <QuestionsNav/>
    <Question/>
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'
import QuestionsNav from '@/components/QuestionsNav.vue'

export default {
  name: 'home',
  components: {
    Question, QuestionsNav
  }
}
</script>
