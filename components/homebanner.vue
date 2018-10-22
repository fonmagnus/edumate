<template lang="pug">
	v-flex(xs12 fluid)
		v-card(fluid)
			v-img.transparent(src="https://41ff701vpzvf2ulz052zsy42-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/10_Home_school_2-1-min-1024x576.jpg" 
						height="400px" 
						class="gray--text")
				v-container(fluid)
					v-layout(row wrap).mt-5.ml-5
						v-flex.md4
						v-flex.md8.mt-5
							v-btn.mx-5.mt-5.display-1.large.attractive(
								right 
								round 
								block
								color="orange accent-3" 
								@click="gotoTutoring") Pick A Tutor
							v-btn.mx-5.mt-1.subheading.medium.informative(
								right 
								flat 
								block
								color="orange accent-4" 
								@click="") New to Edumate? Get started
							
							//- br
							//- v-btn.mx-5.title.large.informative(right round color="gray accent-2") Get Started
</template>

<script>
export default {
	methods: {
		gotoTutoring() {
			this.$router.push('/tutoring');
		},
	},
}
</script>


<style scoped>
  .large{
    height: 60%;
    width: 30%;
    text-transform: capitalize;
	}

	.medium{
		height: 30%;
		width: 30%;
    text-transform: capitalize;
	}
	
	.transparent{
		opacity: 0.9;
	}

  .attractive{
    color: white;
  }
  
  .informative{
    color: orange;
  }
</style>