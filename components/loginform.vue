<template lang="pug">
	v-card
		v-card-text.orange.accent-2.white--text.text-xs-center
			span.title Login to Edumate
		v-card-text.text-xs-center(v-if="!isValid")
			v-alert(outline color="error", icon="warning" :value="true") Username dan Password yang Anda masukkan salah
		v-card-text
			v-layout(row wrap)
				v-flex.xs12.pl-3.pr-3
					v-text-field(v-model="email", color="orange accent-3" label="Email", prepend-icon="person_pin")
			v-layout(row wrap)
				v-flex.xs12.pl-3.pr-3
					v-text-field(v-model="password", color="orange accent-3" label="Password", prepend-icon="lock", type="password")
		v-card-text.text-xs-center
			a.subheading.orange--text Forgot your password? Click here
		v-card-text
			v-layout(row wrap)
				v-flex.xs6
					v-btn(:disabled="true" flat)
				v-flex.xs3
					v-btn.orange--text.subheading(flat, @click="hideLoginDialog") Cancel
				v-flex.xs3
					v-btn.orange.accent-2.white--text.subheading(flat, @click="validateUser") Login
</template>


<script>
	
	import { mapGetters } from 'vuex';

	export default {
		props: {
			openLoginDialog: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				email: '',
				password: '',
				isValid: true,
			};
		},
		computed: {
			...mapGetters({
				isLoggedIn: 'auth/getIsLoggedIn',
				currentUser: 'user/getCurrentUser',
			}),
		},
		methods: {
			hideLoginDialog() {
				this.$emit('hideLoginDialog');
				this.isValid = true;
				this.email = '';
				this.password = '';
			},
			validateUser() {
				this.$store
					.dispatch('auth/loginUser', {
						auth: {
							email: this.email,
							password: this.password,
						}
					})
					.then((response) => {
						this.$store.dispatch('user/setCurrentUser', {
							email: this.email,
							password: this.password,
						});
						this.$store.dispatch('auth/setIsLoggedIn', true);
						this.isValid = true;
						this.password = '';
						this.email = '';
						this.$emit('hideLoginDialog');
					});
			},
		}
	};
</script>