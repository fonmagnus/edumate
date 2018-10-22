<template lang="pug">
	v-container(fluid)
		v-layout(row wrap)
			Header(:openLoginDialog="openLoginDialog" 
						 :isLoggedIn="isLoggedIn"
						 :openSignupDialog="openSignupDialog"
						 :edumateUser="edumateUser"
						 :openVerificationNotice="openVerificationNotice"
						 @showLoginDialog="showLoginDialog"
						 @hideLoginDialog="hideLoginDialog"
						 @showSignupDialog="showSignupDialog"
						 @hideSignupDialog="hideSignupDialog"
						 @showVerificationNotice="showVerificationNotice"
						 @hideVerificationNotice="hideVerificationNotice"
						 @loginUser="loginUser"
						 @logoutUser="logoutUser")
		v-layout(row wrap)
			Menubar
		nuxt-child
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
			openSignupDialog: false,
			openVerificationNotice: false,
			edumateUser: {
				username: '',
			},
		};
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
		showSignupDialog() {
			this.openSignupDialog = true;
		},
		hideSignupDialog() {
			this.openSignupDialog = false;
		},
		showVerificationNotice() {
			this.openVerificationNotice = true;
		},
		hideVerificationNotice() {
			this.openVerificationNotice = false;
		},
  },
}
</script>



