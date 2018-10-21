<template lang="pug">
	v-layout(row wrap)
		v-toolbar
			v-tabs(active-class="orange lighten-4" color="grey lighten-3" slider-color="orange accent-3")
				v-tab.mx-2(ripple key="home" to="/home" href="/home")
					span.title.font-weight-regular.sentence Home
				v-tab.mx-2(ripple key="tutoring" to="/tutoring" href="/tutoring")
					span.title.font-weight-regular.sentence Tutoring
				v-tab.mx-2(ripple key="about" to="/about" href="/about")
					span.title.font-weight-regular.sentence About
</template>

<script>
</script>

<style scoped>
	.sentence{
		text-transform: capitalize;
	}
</style>
