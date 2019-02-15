<template>
	<div id="app">
		<NavBar/>
		<div class="container">
			<router-view/>
		</div>
		<!-- <Footer/> -->
	</div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
	components: {
		NavBar, Footer
	}
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
	padding-top: 30px;
	padding-bottom: 30px;
}
</style>
