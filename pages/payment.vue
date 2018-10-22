<template lang="pug">
	v-container
		v-layout(row wrap)
			Header(:openLoginDialog="openLoginDialog" 
							:isLoggedIn="isLoggedIn"
							:edumateUser="edumateUser"
							@showLoginDialog="showLoginDialog"
							@hideLoginDialog="hideLoginDialog"
							@loginUser="loginUser"
							@logoutUser="logoutUser")
		v-layout(row wrap)
			v-flex.md12
				
</template>

<script>
import Header from '../components/header.vue';
export default {
	components: {
		Header,
	},
}
</script>
