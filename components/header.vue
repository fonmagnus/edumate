<template lang="pug">
	v-layout(row wrap)
		v-flex.xs12
			v-toolbar.pa-3
				v-flex.xs3
					//- v-img.hover(src="https://i.postimg.cc/q7Vj3Qf5/efleq1.png" @click="gotoHome" height="90px")
					span.hover.display-1(@click="gotoHome") Edumate
				v-flex.xs6.pl-3.pr-3.pt-2
					v-text-field(v-model="searchParam" label="I want to Learn ...", prepend-icon="search" color="orange accent-3")
				v-flex.xs1
					v-btn(flat @click="searchTutor(searchParam)") search
				v-flex.xs6(v-if="!isLoggedIn" class="text-xs-right")
					v-dialog(v-model="openLoginDialog", max-width="450px",  transition="slide-y-reverse-transition", persistent)
						v-btn.white--text.subheading(slot="activator" round, color="orange accent-2" @click.native="showLoginDialog") LOGIN
						LoginForm(:openLoginDialog="openLoginDialog" 
											:isLoggedIn="isLoggedIn"
											@hideLoginDialog="hideLoginDialog"
											@loginUser="loginUser")
					v-dialog(v-model="openSignupDialog", max-width="450px",  transition="slide-y-reverse-transition", persistent)
						v-btn.orange--text.subheading(slot="activator" round, color="grey lighten-2" @click.native="showSignupDialog") Sign Up
						SignUpForm(:openSignupDialog="openSignupDialog"
											@hideSignupDialog="hideSignupDialog"
											@showVerificationNotice="showVerificationNotice")
					v-dialog(v-model="openVerificationNotice", max-width="450px",  transition="slide-y-reverse-transition", persistent)
						VerificationNotice(:openVerificationNotice="openVerificationNotice"
											@hideVerificationNotice="hideVerificationNotice")
				v-flex.xs6.text-xs-right(v-else)
					span Welcome Back, {{ edumateUser.username }}!   
						a.orange--text(@click="logoutUser") Logout
						
</template>

<script>
	import LoginForm from '../components/loginform.vue';
	import SignUpForm from '../components/signupform.vue';
	import VerificationNotice from '../components/verificationnotice.vue';

	export default {
		components: {
			LoginForm,
			SignUpForm,
			VerificationNotice,
		},
		props: {
			openLoginDialog: {
				type: Boolean,
				default: false,
			},
			isLoggedIn: {
				type: Boolean,
				default: false,
			},
			edumateUser: {
				type: Object,
				required: true,
			},
			openSignupDialog: {
				type: Boolean,
				default: false,
			},
			openVerificationNotice: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				searchParam: '',
			};
		},
		methods: {
			showLoginDialog() {
				this.$emit('showLoginDialog');
			},
			hideLoginDialog() {
				this.$emit('hideLoginDialog');
			},
			loginUser(loggedInEdumateUser) {
				this.$emit('loginUser', loggedInEdumateUser);
				this.hideLoginDialog();
			},
			logoutUser() {
				this.$emit('logoutUser');
				this.hideLoginDialog();
			},
			gotoHome() {
				this.$router.push('/home');
			},
			showSignupDialog() {
				this.$emit('showSignupDialog');
			},
			hideSignupDialog() {
				this.$emit('hideSignupDialog');
			},
			showVerificationNotice() {
				this.$emit('showVerificationNotice');
			},
			hideVerificationNotice() {
				this.$emit('hideVerificationNotice');
			},
			searchTutor(searchParam) {
				this.$store.dispatch('tutorfilter/setTutorFilter', {
					selectedCourseList: [searchParam],
				});
				this.$router.push('/tutoring/search');
			}
		},
	};
</script>

<style scoped>
	.hover:hover{
		cursor: pointer;
	}
</style>

