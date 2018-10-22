<template lang="pug">
	v-container(fluid)
		v-layout(row wrap)
			v-flex.md12
				v-card.md12.pa-4(fluid color="grey lighten-3")
					v-layout(row wrap)
						v-flex.md12.text-xs-center
							span.title.font-weight-light About Us
					v-layout(row wrap)
						v-flex.md2
						v-flex.md8.ma-3
							v-card.px-4.py-4(fluid color="white")
								v-layout(row wrap)
									v-flex.md12
										span.subheading Edumate is an online platform for tutoring and course system. We help people to find their exact tutor that matches up with their passion of learning, schedule, and also price fee.
										span.subheading  We really passionate about develop people to help them learn, grow, and pursuing their desire for learning in a great and flexible way
								
</template>

<script>
export default {
	data(){
		return {
			teamMember: [
				{
					id: 1,
					name: 'Arnold Ardianto',
					phoneNumber: '0858-1124-5759',
					photo: 'https://scontent.fcgk4-1.fna.fbcdn.net/v/t1.0-9/41237151_10209505482073427_3852569760248102912_n.jpg?_nc_cat=111&_nc_eui2=AeG5OS1IXqswmL5U2jObEshZraoGtjVJQgWinObVaVTaYvOnfGWUjPgDvpSPb1MjcZz-61qP3ISj2QHpQuhz207RHFcfKKzFrkpCiuinbED-rA&_nc_ht=scontent.fcgk4-1.fna&oh=3dde58c6f71cbb71d9f13708508a080c&oe=5C3E78AD',
				},
				{
					id: 2,
					name: 'Lisa Indraputri',
					phoneNumber: '0812-300-400',
					photo: 'https://scontent.fcgk5-1.fna.fbcdn.net/v/t1.0-9/43072115_551513831962515_4243472944518397952_n.jpg?_nc_cat=108&_nc_eui2=AeEOY17VXFf1oTV7go9xc1lccoV5JfKjoIfmQtFT9b-IgMQPH_vtsNK64hVTNwM7Owj9pgLsC-adohwup50bLgwWO_CUhlKgV2R2wDf5MMV8Hw&_nc_ht=scontent.fcgk5-1.fna&oh=28c4cacae558410a3d4baaed41900241&oe=5C421D5B',
				},
				
				{
					id: 3,
					name: 'Fadil Kamal',
					phoneNumber: '0857-100-4567',
					photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0EuYjF49hIC4G4Ghb-qZ7Dd__fdsRozNn2MHEeNe-bmfvSgN',
				},

				{
					id: 4,
					name: 'George Christian',
					phoneNumber: '0858-110-4222',
					photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0EuYjF49hIC4G4Ghb-qZ7Dd__fdsRozNn2MHEeNe-bmfvSgN',
				},
				
			],
		};
	},
}
</script>
