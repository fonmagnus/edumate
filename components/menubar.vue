<template lang="pug">
	v-layout(row wrap)
		v-toolbar
			v-tabs(color="grey lighten-3" slider-color="orange accent-3" slot="extension" grow centered)
				v-tab(ripple key="home" to="/home" href="/home")
					span Home
				v-tab(ripple key="offline_tutoring" to="/home/offline_tutoring" href="/home/offline_tutoring")
					span Offline Tutoring
				v-tab(ripple key="online_tutoring" to="/home/online_tutoring" href="/home/offline_tutoring")
					span Online Tutoring
				v-tab(ripple key="about" to="/home/about" href="/home/offline_tutoring")
					span About
</template>

<script>
</script>