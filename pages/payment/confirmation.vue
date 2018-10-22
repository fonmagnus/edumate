<template lang="pug">
	v-layout(row wrap)
		v-flex.md12
			v-card.md12.pa-4(fluid color="grey lighten-3")
				v-layout(row wrap)
					v-flex.md12.text-xs-center
						span.title.font-weight-light Payment
				v-layout(row wrap)
					v-flex.md2
					v-flex.md8.ma-3
						v-card.pt-2.pl-2(fluid color="white")
							v-layout(row wrap)
								v-flex.md12.mt-3.mx-4
									span.title.orange--text.font-weight-black Thank You!
							v-layout(row wrap)
								v-flex.md12.my-3.mx-4
									span.body-1 Our team will soon confirm your payment for this tutor booking. We're really glad for your trust and we hope the best for your wonderful learning experience. If there is any information or updates from the tutor,  
									span.body-1.font-weight-bold we'll let you know in maximum of 12 hours of waiting. 
									span.body-1 If you don't receive any notification or confirmation from us, you can directly reach our customer call center below
							v-layout(row wrap)
								v-flex.md3
								v-flex.md6.mx-2
									v-list(two-line)
										v-list-tile(v-for="person in customerCareList" :key="person.id")
											v-list-tile-avatar
												img(:src="person.photo")
											v-list-tile-content
												v-list-tile-title {{ person.name }}
												v-list-tile-sub-title {{ person.phoneNumber }}
											v-list-tile-action
												v-btn(fab flat outline color="green" small)
													v-icon(color="green") phone
							v-layout(row wrap)
								v-flex.md12.text-xs-center.my-4
									span.hover.body-1.orange--text.font-weight-bold(@click="gotoHome()") Back to Home Page
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters({
			customerCareList: 'customercare/getCustomerCareList',
		}),
	},
	mounted() {
		window.scrollTo(0,0);
	},
	methods: {
		gotoHome() {
			this.$router.push('/home');
		},
	},
}
</script>

<style scoped>
	.hover:hover{
		cursor: pointer;
		color: black !important;
		font-weight: bold;
	}
</style>

