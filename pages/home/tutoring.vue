<template lang="pug">
	v-container(fluid)
		v-layout(row wrap)
			v-flex(xs12)
				v-card
					v-img.transparent(src="http://literacyrochester.org/wp-content/uploads/2017/08/Depositphotos_6842439_original.jpg" height="450px")
		nuxt-child
	</template>

<script>
	export default {
		methods: {
			debug() {
				console.log("ok");
			},
		},
	};
</script>

