<template lang="pug">
	v-layout(row wrap)
		v-snackbar(v-model="errorSnackbar" color="error" top)
			v-icon.white--text(small) error
			span.subheading.ml-3 Please select one of the payment method
			v-btn.white--text(flat @click="errorSnackbar = false") OK
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
								v-flex.md12.my-3.mx-4
									span.body-1 Please complete payment below to proceed with tutoring book system. The payment method can be selected in the below section.
									span.body-1.font-weight-bold Please pay the exact amount including the last 3 digits
							v-layout(row wrap)
								v-flex.md12.my-3.mx-4.text-xs-center
									span.display-1.orange--text.font-weight-medium Rp. {{ formatter(getTotalPrice() + randomAmount) }}
							v-layout(row wrap)
								v-flex.md12.text-xs-center
									v-container
										v-layout(row wrap)
												span.body-1.font-weight-regular Tutor Name : {{ selectedTutor.name }}
										v-layout(row wrap)
												span.body-1.font-weight-regular Location : {{ selectedTutor.locationAddress }}
							v-layout(row wrap)
								v-flex.md12.text-xs-left.my-3.mx-4
									span.subheading Please choose your payment method below
							v-layout(row wrap)
								v-flex.md12.text-xs-left.my-3.mx-4
									v-list(two-line)
										v-list-tile(v-for="bank in bankList" :key="bank.id")
											v-list-tile-action
												v-checkbox(
													:input-value="isChecked(bank.id)"
													color="orange accent-3" 
													@click.native="toggleBank(bank)")
											v-list-tile-avatar
												img(:src="bank.icon")
											v-list-tile-content
												v-list-tile-title {{ bank.bankName }}
												v-list-tile-sub-title {{ bank.recipientNumber }} a.n. {{ bank.recipientName }}
							v-layout(row wrap)
								v-flex.md12.text-xs-left.my-2.mx-4
									span.body-1.font-weight-regular After you have completed payment to the selected Bank Account, click 
									span.body-1.font-weight-bold.orange--text Confirm Payment 
									span.body-1.font-weight-regular below and our team will be happily process your booking
							v-layout(row wrap)
								v-flex.md12.text-xs-center.my-4.mx-4
									v-btn.white--text.subheading(slot="activator" color="orange accent-3" @click="confirmPayment()") Confirm Payment
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			selectedBank: [],
			errorSnackbar: false,
			bankList: [
				{
					id: 1,
					icon: 'https://cdn.iconscout.com/icon/free/png-256/bca-225544.png',
					bankName: 'BCA Example Account',
					recipientNumber: '125-002-1577',
					recipientName: 'Edumate Indonesia',
				},
				{
					id: 2,
					icon: 'https://i.site.pictures/SdTNp.png',
					bankName: 'Mandiri Example Account',
					recipientNumber: '633-050-1899',
					recipientName: 'Edumate Indonesia',
				},
				{
					id: 3,
					icon: 'http://kabarkampus.com/wp-content/uploads/2012/02/logo-bri.png',
					bankName: 'BRI Example Account',
					recipientNumber: '123-4567-8990',
					recipientName: 'Edumate Indonesia',
				},
				{
					id: 4,
					icon: 'https://static-s.aa-cdn.net/img/gp/20600004198080/3sCqMjPn_TaknyWVQyMbCHBHU7lEKY3uZFDyPQpYzTmHNmlff1HIfksTIED4DiXi5ZFd=w300',
					bankName: 'BNI Example Account',
					recipientNumber: '1154-6557-8181',
					recipientName: 'Edumate Indonesia',
				},
			],
		};
	},
	computed: {
		...mapGetters({
			selectedTutor: 'tutor/getSelectedTutor',
			randomAmount: 'util/getRandomAmount',
		}),
	},
	mounted() {
		if(this.randomAmount === -1) {
			this.$store.dispatch('util/setRandomAmount', this.getRandomIdentifier());
		}
		window.scrollTo(0,0);
	},
	methods: {
		formatter(money) {
			let result = '';
			let cur = 0;
			while(money > 0) {
				if(cur === 3) {
					result += '.';
					cur=0;
				}

				let digit = money%10;
				result += digit.toString();
				money /= 10;
				money = Math.floor(money);
				cur++;
			}

			result = result.split("").reverse().join("");
			return result;
		},
		getTotalPrice() {
			return this.selectedTutor.lowerBoundFee;
		},
		isChecked(id) {
			for(let i = 0; i < this.selectedBank.length; i++) {
				if(this.selectedBank[i].id === id) {
					return true;
				}
			}
			return false;
		},
		toggleBank(bank) {
			let addBank = true;
			this.selectedBank.forEach(item => {
				if (item.id === bank.id) { addBank = false; }
			});

			if(addBank) {
				this.selectedBank = [];
				this.selectedBank.push(bank);
			}
			else {
				this.selectedBank = this.selectedBank.filter(filteredItem => filteredItem.id !== bank.id);
			}
		},
		getRandomIdentifier() {
			return Math.floor(Math.random() * Math.floor(99))
		},
		confirmPayment() {
			if(this.selectedBank.length > 0){
				this.$router.push('/payment/confirmation');
			}
			else {
				this.errorSnackbar = true;
			}
		},
	},
}
</script>
