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
											v-img(:src="selectedTutor.photo" height="200px")
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

</template>

<script>
import { mapGetters } from 'vuex';

export default {
	data() {
		return {

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
