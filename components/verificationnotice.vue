<template lang="pug">
	v-card
		v-card-text.orange.accent-2.white--text.text-xs-center
			span.title Sign Up to Edumate
		v-card-text
			v-layout(row wrap)
				v-card-text.text-xs-center
					subheading.orange--text We have sent verification link to your e-mail.
		//- v-card-text.text-xs-center
		//- 	a.body-2.orange--text Resend e-mail.
		v-card-text
			v-layout(row wrap)
				v-flex.xs6
					v-btn(:disabled="true" flat)
				v-flex.xs3
					//v-btn.orange--text.subheading(flat, @click="hideSignupDialog") Cancel
				v-flex.xs3
					v-btn.orange.accent-2.white--text.subheading(flat, @click="hideVerificationNotice") Okay
</template>

<script>
export default {
    props: {
        openVerificationNotice: {
            type: Boolean,
            default: false,
        },
	},
    methods: {
        hideVerificationNotice() {
            this.$emit('hideVerificationNotice');
        },
    },
}
</script>