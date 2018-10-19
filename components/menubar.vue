<template lang="pug">
	v-layout(row wrap)
		v-toolbar
			v-tabs(color="grey lighten-3" slider-color="orange accent-3" slot="extension" grow centered)
				v-tab(ripple key="home" to="/home" href="/home")
					span Home
				v-tab(ripple key="tutoring" to="/home/tutoring" href="/home/tutoring")
					span Tutoring
				v-tab(ripple key="about" to="/home/about" href="/home/offline_tutoring")
					span About
</template>

<script>
</script>