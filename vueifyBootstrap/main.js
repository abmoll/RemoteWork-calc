
// Vue.component('button-link', {
//   template: `
//   <a v-bind:href='url' v-bind:style="{ 'background-color': backgroundColor}">{{text}}
//   </a>`,
//
//     props: ['text', 'url', 'backgroundColor'],
//     data: function(){
//
//       // data for components not an object, it's a function that returns object
//       // this way, each instance of component gets it own unique data
//       return {
//         defaultMessage : "this is a default message",
//         otherStuff: 'this is other data'
//       }
//     },
//     methods: {
//       logStuff: function(){
//         console.log(this.otherStuff)
//       }
//     }
// })
//
// var mainVm  = new Vue({
//   el: '#app',
//   data: {
//   },
// })

Vue.component('jumbotron', {
  template: `
  <div class="jumbotron">
    <h1>{{header}}</h1>
    <p>{{content}}</p>
    <button>{{buttext}}</button>
  </div>
    `,

    props: ['header', 'content', 'buttext'],


    data: function(){

      // data for components not an object, it's a function that returns object
      // this way, each instance of component gets it own unique data
      return {
        //loginTime: new Date()
      }
    },
    // computed: {
    //   prettyLoginTime: function(){
    //     return this.loginTime.toLocaleTimeString()
    //   }
    // },
    // methods: {
    //   block: function(){
    //     console.log('called block from component')
    //     this.$emit('block')
    //   }
    // }
})

var mainVm  = new Vue({
  el: '#app',
  data: {
  //   friends: [
  //     {
  //       name: "Alice"
  //       profilePic: lorempixel
  //     },
  //     {
  //       name: 'Bob'
  //     },
  //     {
  //       name: 'Carlos'
  //     },
  //   ]
  },
  methods: {

  }
})

// Vue.component('button-link', {
//   template: `
//   <a v-bind:href='url'>
//   <button>{{text}}</button>
//   </a>`,
//
//     props: ['text', 'url'],
//     data: function(){
//
//       // data for components not an object, it's a function that returns object
//       // this way, each instance of component gets it own unique data
//       return {
//         defaultMessage : "this is a default message",
//         otherStuff: 'this is other data'
//       }
//     },
//     methods: {
//       logStuff: function(){
//         console.log(this.otherStuff)
//       }
//     }
// })
//
// var mainVm  = new Vue({
//   el: '#app',
//   data: {
//   },
// })
