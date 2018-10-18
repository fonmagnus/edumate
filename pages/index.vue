<template lang="pug">
  div
    v-layout(row wrap)
      v-flex.xs12
        v-toolbar
          h1 Edumate
          v-spacer
          v-flex.ma-2
            v-text-field(label="Aku mau belajar ...", prepend-icon="search")
          v-btn(round, color="orange accent-2") LOG IN
          v-btn(round, color="grey lighten-2") Sign Up
    v-layout(row wrap)
      v-toolbar
        v-tabs(color="grey lighten-3" slider-color="orange accent-3" slot="extension" grow centered)
          v-tab(ripple key="home")
            span Home
          v-tab(ripple key="offline_tutoring")
            span Offline Tutoring
          v-tab(ripple key="online_tutoring")
            span Online Tutoring
          v-tab(ripple key="about")
            span About
    v-layout.pt-3(row wrap)
      v-flex(xs12)
        v-card
          v-img(src="https://www.vpul.upenn.edu/tutoring/images/rotating/159959be499f6b_MEPOQKNIJGHFLf.jpg" 
                height="300px" 
                class="gray--text")
            v-container(fill-height fluid)
              v-layout
                v-flex.xs12(align-end, flexbox)
                  v-btn.large.attractive(right round color="orange accent-2") Pick A Tutor
                  br
                  v-btn.large.informative(right round color="gray accent-2") Get Started
    v-layout(row wrap)
      v-toolbar
        v-tabs(color="grey lighten-3" slider-color="orange accent-3" slot="extension" grow centered)
          v-tab(ripple key="why_edumate")
            span Why Edumate?
          v-tab(ripple key="our_tutor")
            span Our Tutor
          v-tab(ripple key="promo")
            span Promo

    v-layout.pt-3(row wrap)
      v-flex(xs6)
        v-card
          v-img(src="http://syllableslearningcenter.com//wp-content/uploads/2014/04/Syllables-Reading-Tutoring-helps-students-with-dyslexia.jpg" 
                height="400px" 
                class="gray--text")
      v-spacer
      v-flex(xs6)
        h2.pl-5.mt-5 Why Edumate?
        br
        ul.pl-5
          li
            span Easy To Use
          li 
            span Adjust Your Need
          li 
            span Trustowrthy and Capable Tutors
    br
    v-layout(row wrap)
      v-footer(height="auto")
        v-card(color="orange lighten-1")
          v-card-text
            v-btn(v-for="icon in icons", :key="icon", icon)
              v-icon(size="24px") {{ icon }}
          v-card-text(class="white--text pt-0")
            span Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

</template>

<script>

export default {
  data(){
    return {
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    };
  },
}
</script>

<style scoped>
  .large{
    height: 25%;
    width: 30%;
    text-transform: capitalize;
  }

  .attractive{
    font-size: 24px;
    color: white;
  }
  
  .informative{
    font-size: 24px;
    color: orange;
  }
</style>


