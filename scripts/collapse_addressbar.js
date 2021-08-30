var previous = document.body.scrollTop;

let ticking2 = false;
console.log('hi');

function collapse(){
  var current = document.body.scrollTop;
  if (current > previous){
    window.scrollTo(0,100);
  }
  else {
    window.scrollTo(0,0);
  }
  console.log(window.scrollY);
  previous = current;
}

if (window.innerWidth <= 1000) {
  document.body.addEventListener('scroll', function(e){
    if (!ticking2) {
      requestAnimationFrame(function(){
        collapse();
        ticking2 = false;
      });
      ticking2 = true;
    }
  });
}
