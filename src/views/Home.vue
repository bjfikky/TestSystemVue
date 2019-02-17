<template>
	<div class="home">
		{{testTakerEmail}}
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
	},

	computed: {
		testTakerEmail() {
			return this.$store.state.testTakerEmail;
		}
	}
}
</script>
