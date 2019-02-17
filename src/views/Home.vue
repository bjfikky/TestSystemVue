<template>
	<div class="home">
		<div v-if="testTakerEmail">
			<span>Your Email: <strong>{{testTakerEmail}}</strong></span>
			<QuestionsNav/>
			<Question/>
		</div>

		<div v-else>
			<TestTakerEmail/>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'
import QuestionsNav from '@/components/QuestionsNav.vue'
import TestTakerEmail from '@/components/TestTakerEmail.vue'

export default {
	name: 'home',
	components: {
		Question, QuestionsNav, TestTakerEmail
	},

	computed: {
		testTakerEmail() {
			return this.$store.getters.getTestTakerEmail;
		}
	}
}
</script>
