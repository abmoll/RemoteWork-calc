var app = new Vue({
  el: '#app',
  data: {
    message: 'I do not understand Vue!'
    //anchorHref: "http://nfl.com",
    // friends: [
    //   {
    //     firstName: "jeff",
    //     lastName: "jeffereson",
    //   },
    //   {
    //     firstName: "bobby",
    //     lastName: "roberts",
    //   },
    // ]
  },
  methods: {
    newText: function(){
      app.message = "I love Vue!"
    }
  }
})
