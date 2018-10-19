<template lang="pug">
	v-flex(xs12)
		v-card
			v-img(src="https://www.vpul.upenn.edu/tutoring/images/rotating/159959be499f6b_MEPOQKNIJGHFLf.jpg" 
						height="400px" 
						class="gray--text")
				v-container(fill-height fluid)
					v-layout
						v-flex.xs12(align-end, flexbox)
							v-btn.title.large.attractive(right round color="orange accent-2" @click="gotoTutoring") Pick A Tutor
							br
							v-btn.title.large.informative(right round color="gray accent-2") Get Started
</template>

<script>
export default {
	methods: {
		gotoTutoring() {
			this.$router.push('/home/tutoring');
		},
	},
}
</script>


<style scoped>
  .large{
    height: 20%;
    width: 20%;
    text-transform: capitalize;
  }

  .attractive{
    color: white;
  }
  
  .informative{
    color: orange;
  }
</style>