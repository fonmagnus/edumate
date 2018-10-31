<template lang="pug">
	div(fluid)
		v-layout(row wrap)
			Header(:openLoginDialog="openLoginDialog" 
						 :isLoggedIn="isLoggedIn"
						 :openSignupDialog="openSignupDialog"
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
		br
		v-layout(row wrap)
		Footer
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '../components/header.vue';
import HomeBanner from '../components/homebanner.vue';
import Footer from '../components/footer.vue';
import Menubar from '../components/menubar.vue';
import axios from 'axios';

export default {
  components: {
    Footer,
    Header,
		HomeBanner,
    Menubar,
  },
  data(){
    return {
			openLoginDialog: false,
			openSignupDialog: false,
			openVerificationNotice: false,
		};
  },
	computed: {
		...mapGetters({
			isLoggedIn: 'auth/getIsLoggedIn',
		}),
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
			this.$store.dispatch('auth/setIsLoggedIn', true);
		},
		logoutUser() {
			this.$store.dispatch('auth/setIsLoggedIn', false);
			this.$store.dispatch('user/setSelectedUser', {});
			this.$store.dispatch('auth/clearAccessToken');
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



