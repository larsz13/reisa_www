// DEFINE VARIABLES
var mode = 0; // 0 = EVENT, 1 = VISION
var linkToVision = document.querySelector('#link-to-vision');
var linkToEvent = document.querySelector('#link-to-event');
var eventpage = document.querySelector('#eventpage');
var visionpage = document.querySelector('#visionpage');
var nav = document.querySelector('#nav');

// ON LOAD OF PAGE
initialisePage(mode);
nav.addEventListener('click',toggleMode);

// FUNCTION TO INITIALISE PAGE
function initialisePage(mode){
  if(mode==0){ //EVENT
    linkToEvent.classList.toggle("hide");
    visionpage.classList.toggle("hide");
    eventpage.classList.toggle("animate");
  }else if(mode==1){ //VISION
    linkToVision.classList.toggle("hide");
    eventpage.classList.toggle("hide");
    visionpage.classList.toggle("animate");
  }
}

// TOGGLE CLICK ON LINK CLICKED
function toggleMode(){
  reflow(0);
  linkToVision.classList.toggle("hide");
  eventpage.classList.toggle("hide");
  linkToEvent.classList.toggle("hide");
  visionpage.classList.toggle("hide");
  eventpage.classList.toggle("animate");
  visionpage.classList.toggle("animate");
  if(mode==0){ //EVENT
    mode=1;
  }else if(mode==1){ //VISION
    mode=0;
  }}


  // REFLOW FORCE

function reflow(x){
  console.log(x.offsetHeight);
}