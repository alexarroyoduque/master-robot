const localizedTime = 1000;
const animationRailsEvent = 'start';

var robots = document.querySelectorAll('.hit-box');
var animationRails = document.querySelector('a-animation[begin="' + animationRailsEvent + '"');
var theme = document.querySelector('#theme');
theme.volume = 0.5;
var deathSound = document.querySelector('#deathSound');
var startScreen = document.querySelector('#startScreen');
var resetScreen = document.querySelector('#resetScreen');

function lozalizedRobotStart(event) {
  var target = event.target;
  target.localized = true;
  setTimeout(function() {
    if (target.localized && target.parentNode && target.parentNode.removeChild) {
      target.parentNode.removeChild(target);
      deathSound.play();
    }
  }, localizedTime);
};

function lozalizedEnd(event) {
  event.target.localized = false;
};

robots.forEach(function (element) {
  element.addEventListener('mouseenter', lozalizedRobotStart);
  element.addEventListener('mouseleave', lozalizedEnd);
});

startScreen.addEventListener('mouseenter', function () {
  var target = event.target;
  target.localized = true;
  setTimeout(function() {
    if (target.localized) {
      theme.play();
      animationRails.emit(animationRailsEvent);
    }
  }, localizedTime);

});
startScreen.addEventListener('mouseleave', lozalizedEnd);

resetScreen.addEventListener('mouseenter', function () {
  var target = event.target;
  target.localized = true;
  setTimeout(function() {
    if (target.localized) {
      location.reload();
    }
  }, localizedTime);

});
resetScreen.addEventListener('mouseleave', lozalizedEnd);
