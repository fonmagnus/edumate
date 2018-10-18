import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#212121', 
    accent: colors.grey.darken3,
    secondary: '#212121',
    info: colors.teal.lighten1,
    warning: '#FFD54F',
    error: '#E65100',
    success: '#AEEA00',
  },
  iconfont: 'fa',
})
