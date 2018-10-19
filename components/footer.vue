<template lang="pug">
	v-footer(height="auto")
		v-card(flat, tile, class="orange lighten-1 white--text text-xs-center")
			v-card-text(centered)
				v-btn(v-for="icon in icons" class="mx-3 white--text" icon centered)
					v-icon(size="24px" color="white") {{ icon.logo }}
			v-card-text(class="white--text pt-0")
				span Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</template>

<script>
	export default {
		data() {
			return {
				icons: [
					{
						name: 'Facebook',
						logo: 'fa fa-facebook',
						to: 'https://www.facebook.com',
					},
					{
						name: 'Instagram',
						logo: 'fa fa-instagram',
						to: 'https://www.instagram.com',
					},
					{
						name: 'Twitter',
						logo: 'fa fa-twitter',
						to: 'https://www.twitter.com',
					},
				]
			};
		},
	};
</script>