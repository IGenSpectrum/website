// get navbar buttons and corresponding sections

var buttons = document.querySelectorAll('#Menu > li');
var anchors = document.querySelectorAll('.anchor');

const buffer = 200;

var buttonDict = new Map();
anchors.forEach(anchor => {
  buttonDict.set(anchor,document.querySelector("#Menu > li a[href='#"+anchor.id+"']").parentNode);
});


function highlight(){
  let activeButton = buttons[0];
  buttonDict.forEach((button,anchor) => {
    button.classList.remove("active");
    if (anchor.getBoundingClientRect().y < buffer){
      activeButton = button;
    }
  });
  activeButton.classList.add("active");
}

let ticking = false;

document.addEventListener('scroll', function(e){
  if (!ticking) {
    requestAnimationFrame(function(){
      highlight();
      ticking = false;
    });
    ticking = true;
  }
});
