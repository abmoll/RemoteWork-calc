var myRouter = new VueRouter({
  routes: [
    {
      path: '/',
      component: {
        template: `<h1 class="text-center">
          Random Image Gallery<h1>`,
      }
    },
    {
      path: '/about', //localhost:8080/#/about
      //because the template is on the server, we must send a get request to retrieve it
      //since the AJAX request is async, we cant return the component
      //instead, we resolve the component in the $.get callback
      component: function(resolve, reject){
        $.get('/about.html', function(htmlFromServer){
            var newComponent = {template: htmlFromServer}
            resolve(newComponent)
        })
      }
    },
  ]
})

var mainVm = new Vue({
  el: '#app',
  router: my Router,
  data: {

  }
})
