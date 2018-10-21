<template lang="pug">
	v-container(fluid)
		v-layout(row wrap)
			v-flex.md12
				v-card.md12.pa-4(fluid color="grey lighten-3")
					v-layout(row wrap)
						v-flex.md12.text-xs-center
							span.title.font-weight-light Profile
					v-layout(row wrap)
						v-flex.md2
						v-flex.md8.ma-3
							v-card(fluid color="white")
								v-layout(row wrap)
									v-flex.md4
										v-card.md4.ma-5
											v-img(:src="selectedTutor.photo" height="300px")
									v-flex.md6
										v-layout(row wrap)
											v-flex.md12
												.display-1.orange--text.mx-3.mt-5.mb-2.font-weight-medium {{ selectedTutor.name }}
										v-layout(row wrap)
											v-flex.md12.mx-3
												.body-2.font-weight-light {{selectedTutor.city}}, {{ selectedTutor.province }}
										v-layout(row wrap)
											v-flex.md12.mx-3
												.body-2.font-weight-light Age : {{ selectedTutor.age }}
										br
										.subheading.mx-3.mb-1 Courses that I'm currently teaching :
										v-layout(row wrap)
											v-flex.md12.mx-3
												span(v-for="course in selectedTutor.courseList")
													v-chip(color="orange lighten-4") {{ course }}
										br
										span.mx-3.mb-1 Monthly Fee : 
										span.mb-1.orange--text.font-weight-medium {{ selectedTutor.discloseFee ? 'Negotiable' : `Rp.${formatter(selectedTutor.lowerBoundFee)} - Rp.${formatter(selectedTutor.upperBoundFee)}` }}
										br
										br
										span.mx-3.mb-1 Grade Level : 
										div.mx-4.orange--text.font-weight-medium(v-for="grade in selectedTutor.grade") {{ grade }}
								v-layout(row wrap)
									v-flex.md12.mx-5
										.title My Achievements
								v-layout(row wrap)
									v-flex.md12.mx-5.mt-3
										v-data-table(:headers="achievementHeaders"
																:items="selectedTutor.achievements"
																hide-actions)
											template(slot="items", slot-scope="props")
												td.text-xs-left {{ props.item.title }}
												td.text-xs-left {{ props.item.award }}
												td.text-xs-left {{ props.item.year }}
										
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	data() {
		return {
			achievementHeaders: [
				{ text: 'Title', align: 'left', sortable: false, value: 'title'},
				{ text: 'Award', align: 'left', sortable: false, value: 'title'},
				{ text: 'Year', align: 'left', sortable: false, value: 'title'},
			],
		};
	},
	computed: {
		...mapGetters({
			selectedTutor: 'tutor/getSelectedTutor',
		}),
	},
	mounted() {
		if(this.selectedTutor.name == null) {
			this.$router.push('/tutoring/search');
		}
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
	},
}
</script>
