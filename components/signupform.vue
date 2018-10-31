<template lang="pug">
	v-card
		v-card-text.orange.accent-2.white--text.text-xs-center
			span.title Sign Up to Edumate
		v-card-text.text-xs-center(v-if="!isValid")
			v-alert(outline color="error", icon="warning" :value="true") {{ errorText }}
		v-card-text
			v-layout(row wrap)
				v-flex.xs12.pl-3.pr-3
					v-text-field(v-model="username", color="orange accent-3" label="Email", prepend-icon="person_pin")
			v-layout(row wrap)
				v-flex.xs12.pl-3.pr-3
					v-text-field(v-model="password", color="orange accent-3" label="Password", prepend-icon="lock", type="password")
			v-layout(row wrap)
				v-flex.xs12.pl-3.pr-3
					v-text-field(v-model="password_confirmation", color="orange accent-3" label="Confirm password", prepend-icon="lock", type="password")
		v-card-text.text-xs-center
			subheading.orange--text Please make sure your e-mail is valid.
		v-card-text
			v-layout(row wrap)
				v-flex.xs6
					v-btn(:disabled="true" flat)
				v-flex.xs3
					v-btn.orange--text.subheading(flat, @click="hideSignupDialog") Cancel
				v-flex.xs3
					v-btn.orange.accent-2.white--text.subheading(flat, @click="validateUser") Sign Up
</template>

<script>
export default {
    props: {
			openSignupDialog: {
				type: Boolean,
				default: false,
			},
    },
    data() {
			return{
				username: '',
				password: '',
				password_confirmation: '',
				errorText: '',
				isValidMail: true,
				isValidPass: true,
				isValid: true,
      };
    },
    methods: {
      hideSignupDialog() {
				this.$emit('hideSignupDialog');
				this.isValidMail = true;
				this.isValidPass = true;
				this.isValid = true;
				this.username = '';
				this.password = '';
				this.password_confirmation = '';
			},
			validateUser(){
				if(this.username.includes("mail.com") && this.password === this.password_confirmation && this.password.length > 0){
					this.createNewUser();
					this.isValidMail = true;
					this.isValidPass = true;
					this.isValid = true;
					this.password = '';
					this.username = '';
					this.password_confirmation = '';
					this.$emit('showVerificationNotice');
					this.$emit('hideSignupDialog');
        }
				else{
					this.isValid = false;

					if(!this.username.includes("mail.com")){
						this.isValidMail = false;
					}
					if(this.password !== this.password_confirmation || this.password.length === 0){
						this.isValidPass = false;
					}
					if(!this.isValidMail){
						this.errorText = "Email is invalid.";
					}
					if(!this.isValidPass){
						this.errorText = "Password is invalid.";
					}
					if(!this.isValidMail && !this.isValidPass){
						this.errorText = "Email and password are invalid.";
					}
					
					return;
				}
			},

			createNewUser() {
				this.$store
				.dispatch('user/registerUser', {
					user: {
						email: this.username,
						password: this.password,
						password_confirmation: this.password_confirmation,
						role: 'user',
					},
				})
				.then((response) => {
					console.log('Sign Up Successful');
				});
			}
		},
}
</script>
