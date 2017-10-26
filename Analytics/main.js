var startTime, endTime;

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
}

$(window).on('scroll', function(){
  var s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();

  var scrollPercent = (s / (d - c)) * 100;

  console.clear();
  console.log("Scroll Percent: " + scrollPercent);
})

var mouseenterTime = 0;

$(".title-bar").on('mouseenter mouseleave', function (event)
{
    var currentTime = new Date();
    if (event.type === 'mouseenter')
    {
        mouseenterTime = currentTime.getTime();
        console.log('mouseenterTime (#1): ' + mouseenterTime);
    } else if (event.type === 'mouseleave') {
        console.log('mouseenterTime (#2): ' + mouseenterTime);
        var mouseoverTime = currentTime.getTime() - mouseenterTime;
        console.log('mouseover time was: ' + mouseoverTime);

        // Checking if the Hover action has latest for longer than 3 seconds.
        if(mouseoverTime > 3000) {console.log("Three seconds have elapsed")}
    }
})
