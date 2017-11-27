
Vue.component('custom-header', {
  template: `
    <marquee
        v-bind:style="{'font-size':fontsize}"
        v-on:click='logStuff'
        ><h1><em>{{message || defaut message}}</em></h1><marquee>`,
    props: ['message']
    data: function(){
      // data for components not an object, it's a function that returns object
      // this way, each instance of component gets it own unique data
      return {
        defaultMessage : "this is a default message",
        otherStuff: 'this is other data'
      }
    },
    methods: {
      logStuff: function(){
        console.log(this.otherStuff)
      }
    }
})

var mainVm  = new Vue({
  el: '#app',
  data: {},
})
