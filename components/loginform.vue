<template lang="pug">
	v-card
		v-card-text.orange.accent-2.white--text.text-xs-center
			span.title Login to Edumate
		v-card-text.text-xs-center(v-if="!isValid")
			v-alert(outline color="error", icon="warning" :value="true") Username dan Password yang Anda masukkan salah
		v-card-text
			v-layout(row wrap)
				v-flex.xs12.pl-3.pr-3
					v-text-field(v-model="username", color="orange accent-3" label="Email", prepend-icon="person_pin")
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
	export default {
		props: {
			isLoggedIn: {
				type: Boolean,
				default: false,
			},
			openLoginDialog: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				username: '',
				password: '',
				isValid: true,
			};
		},
		methods: {
			hideLoginDialog() {
				this.$emit('hideLoginDialog');
				this.isValid = true;
				this.username = '';
				this.password = '';
			},
			validateUser() {
				if(this.username === 'fonmagnus' && this.password === 'admin') {
					this.isValid = true;
					this.password = '';
					this.$emit('loginUser', { 
						username: this.username, 
					});
					this.username = '';
					this.$emit('hideLoginDialog');
				}
				else {
					this.isValid = false;
					return;
				}
			},
		}
	};
</script>