<template lang="pug">
	v-container(fluid)
		v-layout(row wrap)
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

