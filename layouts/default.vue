<template lang="pug">
  v-app
    v-content
      v-container(fluid)
        nuxt
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        title: 'Edumate'
      }
    }
  }
</script>
