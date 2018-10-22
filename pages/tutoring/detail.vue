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
							v-card.pt-2.pl-2(fluid color="white")
								v-layout(row wrap)
									v-flex.md4
										v-layout(row wrap)
											v-flex.md12
												v-card.md4.mt-4.ml-4.mr-3
													v-img(:src="selectedTutor.photo" height="270px" width="100%")
										v-layout(row wrap)
											v-flex.xs12.text-xs-center
												v-btn.ml-4.mt-4.capitalize(round width="100%" flat outline)
													v-icon forum
													span.body-2.font-weight.light.pl-2.capitalize Chat
													span.pl-2 
														v-icon(:color="selectedTutor.isOnline ? 'green' : 'grey'" small) fiber_manual_record
									v-flex.md6
										v-layout(row wrap)
											v-flex.md12
												.display-1.orange--text.mx-3.mt-4.mb-2.font-weight-medium {{ selectedTutor.name }}
										v-layout(row wrap)
											v-flex.md12.mx-3
												.body-2.font-weight-light Age : {{ selectedTutor.age }}
										v-layout(row wrap)
											v-flex.md12.mx-3
												.body-2.font-weight-light {{selectedTutor.city}}, {{ selectedTutor.province }}
										v-layout(row wrap)
											v-flex.md12.mx-3
												span
													v-icon(small) place
												span.body-2.font-weight-light.pl-3 {{selectedTutor.locationAddress }}
										br
										v-layout(row wrap)
											v-flex.md12.mx-3
												.body-1.mb-1.font-weight-light {{ selectedTutor.profileIntro }}
										br
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
										span.mx-3.mb-1 Grade Level : 
										div.mx-4.orange--text.font-weight-medium(v-for="grade in selectedTutor.grade") {{ grade }}
									v-flex.md2.mt-4
										v-layout.mt-2(row wrap)
											v-icon(x-large color="orange accent-3") stars 
											span.text-xs-right.display-1 {{ selectedTutor.trustPoint }}
										//- v-layout.mt-3(row wrap)
											.caption Available for : 
										//- div.body-1.font-weight-light(v-for="sessionType in selectedTutor.sessionType") {{ sessionType }}
								br
								br
								v-layout(row wrap).mt-3
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
								br
								v-layout(row wrap).mt-3
									v-flex.md12.mx-5
										.title My Schedule
								v-layout(row wrap).mt-3
									v-flex.md12.mx-5.mt-1
										v-data-table(:headers="scheduleHeaders"
																:items="selectedTutor.schedules"
																width="100%")
											template(slot="items", slot-scope="props")
												td.text-xs-left(:class="props.item.currentQuota === props.item.maxQuota ? 'orange--text' : 'black--text'") {{ props.item.day }}
												td.text-xs-left(:class="props.item.currentQuota === props.item.maxQuota ? 'orange--text' : 'black--text'") {{ props.item.timeStart }} - {{ props.item.timeEnd }}
												td.text-xs-left(:class="props.item.currentQuota === props.item.maxQuota ? 'orange--text' : 'black--text'") {{ props.item.lesson }}
												td.text-xs-left(:class="props.item.currentQuota === props.item.maxQuota ? 'orange--text' : 'black--text'") {{ props.item.grade }}
												td.text-xs-left(:class="props.item.currentQuota === props.item.maxQuota ? 'orange--text' : 'black--text'") {{ props.item.sessionType }}
												td.text-xs-left(:class="props.item.currentQuota === props.item.maxQuota ? 'orange--text' : 'black--text'") {{ props.item.currentQuota }} / {{ props.item.maxQuota }}
												//- td.text-xs-left(:class="props.item.currentQuota === props.item.maxQuota ? 'orange--text' : 'black--text'") {{ props.item.currentQuota === props.item.maxQuota ? 'Not Available' : 'Available' }}
												td.text-xs-center.pt-3.pl-5
													v-checkbox(:disabled="props.item.currentQuota === props.item.maxQuota" 
																		:input-value="isChecked(props.item.id)" 
																		color="orange"
																		@click.native="toggleSchedule(props.item)")
								br
								v-layout(row wrap)
									v-flex.md8
									v-flex.md3.text-xs-right
										v-dialog(v-model="showBookingConfirmation", width="500")
											v-btn.subheading.capitalize.white--text(color="orange accent-3" 
												:disabled="selectedSchedule.length === 0"
												slot="activator") Book Now
											v-card
												v-card-title.headline.orange.accent-3.white--text Booking Confirmation
												v-card-text.body-1 You're about to book schedule of this following tutor : 
												v-container
													v-layout(row wrap)
														v-flex.xs12.subheading
															span Name : 
															span.orange--text.font-weight-bold {{ selectedTutor.name }}
													v-layout(row wrap)
														v-flex.xs12.subheading
															span Location : 
															span.orange--text.font-weight-bold {{ selectedTutor.locationAddress }}
												v-container
													v-layout(row wrap)
														span.subheading Schedule : 
													br
													v-layout.mt-2(row wrap v-for="schedule in selectedSchedule")
														v-flex.xs2
															span.orange--text.font-weight-bold {{ schedule.day }}
														v-flex.xs3
															span.orange--text.font-weight-bold {{ schedule.timeStart }} - {{ schedule.timeEnd }}
														v-flex.xs3
															span.orange--text.font-weight-bold {{ schedule.grade }}
														v-flex.xs2
															span.orange--text.font-weight-bold {{ schedule.lesson }}
														v-flex.xs2
															span.orange--text.font-weight-bold {{ schedule.sessionType }}
												v-container
													v-layout(row wrap)
														v-flex.xs4.body-1 Are You Sure?
													v-layout(row wrap)
														v-flex.xs6
														v-flex.xs3
															v-btn.body-1.orange--text.text-xs-center(flat @click="showBookingConfirmation = false") Cancel
														v-flex.xs3
															v-btn.body-1.white--text.text-xs-center(color="orange accent-3" @click="gotoPayment") Confirm

								//- br
								//- v-layout(row wrap)
								//- 	v-flex.md12.mx-5.mt-3
								//- 		.title My Teaching Video
								//- v-layout.ml-5(row wrap)
								//- 	v-flex.md6.mt-3(v-for="vid in selectedTutor.videos")
								//- 		youtube-media(:videoId="vid.source"
								//- 						player-width="95%",
								//- 						player-height="300")
								//- 	v-flex.md12.mx-5.mt-3.text-xs-center.mb-5(v-if="!videoAvailable()")
								//- 		.subheading No available videos
								br
								v-layout(row wrap)
									v-flex.md12.mx-5
										.title Testimony from Students
								v-layout.ml-5.mb-5(row wrap)
									v-flex.md6.mt-3
									v-flex.md12.mx-5.mt-3.text-xs-center.mb-5(v-if="!testimonyAvailable()")
										.subheading No available testimony
										
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	data() {
		return {
			selectedSchedule: [],
			showBookingConfirmation: false,
			achievementHeaders: [
				{ text: 'Title', align: 'left', sortable: false, value: 'title'},
				{ text: 'Award', align: 'left', sortable: false, value: 'title'},
				{ text: 'Year', align: 'left', sortable: false, value: 'title'},
			],
			scheduleHeaders: [
				{ text: 'Day', align: 'left', sortable: false, value: 'title'},
				{ text: 'Time', align: 'left', sortable: false, value: 'title'},
				{ text: 'Lesson', align: 'left', sortable: false, value: 'title'},
				{ text: 'Grade', align: 'left', sortable: false, value: 'title'},
				{ text: 'Session Type', align: 'left', sortable: false, value: 'title'},
				{ text: 'Quota', align: 'left', sortable: false, value: 'title'},
				{ text: 'Book Now', align: 'left', sortable: false, value: 'title'},
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
		window.scrollTo(0,0);
		window.smoothscroll = () => {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
      }
    }
    window.addEventListener('scroll', this.catchScroll)
	},
	destroyed () {
    window.removeEventListener('scroll', this.catchScroll)
  },
	methods: {
		videoAvailable() {
			if(this.selectedTutor.videos == null) {
				return false;
			}
			if(this.selectedTutor.videos.length > 0) {
				return true;
			}
			return false;
		},
		testimonyAvailable() {
			if(this.selectedTutor.testimonies == null) {
				return false;
			}
			if(this.selectedTutor.testimonies.length > 0) {
				return true;
			}
			return false;
		},
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
		isChecked(id) {
			for(let i = 0; i < this.selectedSchedule.length; i++) {
				if(this.selectedSchedule[i].id === id) {
					return true;
				}
			}
			return false;
		},
		toggleSchedule(schedule) {
			let addSchedule = true;
			this.selectedSchedule.forEach(item => {
				if (item.id === schedule.id) { addSchedule = false; }
			});

			if(addSchedule) {
				this.selectedSchedule.push(schedule);
			}
			else {
				this.selectedSchedule = this.selectedSchedule.filter(filteredItem => filteredItem.id !== schedule.id);
			}
		},
		catchScroll () {
      this.visible = (window.pageYOffset > parseInt(this.visibleoffset))
		},
		backToTop () {
      window.smoothscroll()
      this.$emit('scrolled');
		},
		gotoPayment() {
			this.$store
				.dispatch('tutor/setSchedule', this.selectedSchedule)
				.then(() => {
					this.$router.push('/payment');
				});
		},
	},
}
</script>

<style scoped>
	.capitalize{
		text-transform: capitalize;
	}
</style>

