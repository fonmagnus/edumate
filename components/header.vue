<template lang="pug">
	v-layout(row wrap)
		v-flex.xs12
			v-toolbar.pa-3
				v-flex.xs3
					.display-1 Edumate
				v-flex.xs6.pl-3.pr-3.pt-2
					v-text-field(label="I want to Learn ...", prepend-icon="search" color="orange accent-3")
				v-flex.xs1
					v-btn(flat) search
				v-flex.xs6(v-if="!isLoggedIn" class="text-xs-right")
					v-dialog(v-model="openLoginDialog", max-width="450px",  transition="slide-y-reverse-transition", persistent)
						v-btn.white--text.subheading(slot="activator" round, color="orange accent-2" @click.native="showLoginDialog") LOGIN
						LoginForm(:openLoginDialog="openLoginDialog" 
											:isLoggedIn="isLoggedIn"
											@hideLoginDialog="hideLoginDialog"
											@loginUser="loginUser")
					v-btn.orange--text.subheading(round, color="grey lighten-2") Sign Up
				v-flex.xs6.text-xs-right(v-else)
					span Welcome Back, {{ edumateUser.username }}!   
						a.orange--text(@click="logoutUser") Logout
						
</template>

<script>
	import LoginForm from '../components/loginform.vue';

	export default {
		components: {
			LoginForm,
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
		},
	};
</script>