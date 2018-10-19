<template lang="pug">
	v-layout(row wrap)
		v-flex.xs12
			v-toolbar.pa-3
				v-flex.xs2
					.display-1 Edumate
				v-flex.xs8.pl-3.pr-3.pt-2
					v-text-field(label="I want to Learn ...", prepend-icon="search")
				v-flex.xs3(v-if="true" class="text-xs-right")
					v-btn(round, color="orange accent-2") LOG IN
					v-btn(round, color="grey lighten-2") Sign Up
</template>

<script>
	
</script>