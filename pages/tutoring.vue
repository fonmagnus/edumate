<template lang="pug">
	div(fluid)
		v-layout(row wrap)
			Header(:openLoginDialog="openLoginDialog" 
							:isLoggedIn="isLoggedIn"
							:edumateUser="edumateUser"
							@showLoginDialog="showLoginDialog"
							@hideLoginDialog="hideLoginDialog"
							@loginUser="loginUser"
							@logoutUser="logoutUser")
		v-layout(row wrap)
			Menubar
		nuxt-child
		br
		v-layout(row wrap)
			Footer
	</template>

<script>
import Header from '../components/header.vue';
import HomeBanner from '../components/homebanner.vue';
import Footer from '../components/footer.vue';
import Menubar from '../components/menubar.vue';

export default {
	components: {
    Footer,
    Header,
		HomeBanner,
    Menubar,
  },
  data(){
    return {
			isLoggedIn: false,
			openLoginDialog: false,
			edumateUser: {
				username: '',
			},
    };
	},
	mounted() {
		window.scrollTo(0,0);
	},
	methods: {
		showLoginDialog() {
			this.openLoginDialog = true;
		},
		hideLoginDialog() {
			this.openLoginDialog = false;
		},
		loginUser(loggedInEdumateUser) {
			this.isLoggedIn = true;
			this.edumateUser = loggedInEdumateUser;
		},
		logoutUser() {
			this.edumateUser = {};
			this.isLoggedIn = false;
		},
	},
};
</script>

