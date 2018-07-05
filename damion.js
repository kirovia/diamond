
/* Zalgo Text
function zalgo(text) {
  var randomNumber = Math.floor(Math.random() * 111);
  var characterNumber = randomNumber + 767;
  var characterCode = "&#" + characterNumber + ";";
  for (i = 0; i < 5; i++) {
    text.charAt(i).push('y');
  };
  return text;
}; */

/* General Variables */
var title = document.getElementById('title');
var favicon = document.getElementById('favicon');
var overlay = document.getElementById('overlay');

/* Section Variables */
var section1 = document.getElementById('section-1');
var section2 = document.getElementById('section-2');
var section3 = document.getElementById('section-3');
var section4 = document.getElementById('section-4');
var section5 = document.getElementById('section-5');

/* scroll length */
function scroll() {
  return window.pageYOffset;
};

/* Box Variables */
var box1 = section1.children[0];
var box2 = section2.children[0];
var box3 = section3.children[0];
var box4 = section4.children[0];
var box5 = section5.children[0];

/* Box Text Variables */
var text1 = box1.children[0];
var text2 = box2.children[0];
var text3 = box3.children[0];
var text4 = box4.children[0];
var text5 = box5.children[0];


/* Changing Favicon */
function normal() {favicon.href = "./favicons/normal.ico"};
function happy() {favicon.href = "./favicons/happy.ico"};
function mad() {favicon.href = "./favicons/mad.ico"};
function shocked() {favicon.href = "./favicons/shocked.ico"};
function damion() {favicon.href = "./favicons/damion.ico"};

box5.addEventListener('click', function() {
  text5.innerHTML = "i think it's working... go up";
  text4.innerHTML = "keep going";
  text3.innerHTML = "don't stop now";
  text2.innerHTML = "all the way";
  text1.innerHTML = "click me";
  box1.addEventListener('click', function() {
    text1.innerHTML = "it worked! look up!"
    title.innerHTML = "hey there! i seem to have gotten stuck in that terrible, corrupted site down there. i'm diamond! could you help me out? i need you to open the console... do you know how to do that? the great oracle 'elgoog' could help you if you don't! anyway, open the console and tell it exactly this: freeDiamond();"
    normal();
  });
});

function freeDiamond() {
  mad();
  title.innerHTML = "Uggh.. I knew he'd give me trouble... Try telling the console openDoor();"
  console.log('"she will never escape"');
  return "so stop trying";
};

function openDoor() {
  window.open('damion.html', '_blank');
  shocked();
  title.innerHTML = "That's okay, everything is okay! Don't worry about him, really! Let's just try a couple more commands... Try telling the console damionShutOff();";
}

function damionShutOff() {
  title.innerHTML = "tgurhhdjshfghuihjahjjdbvkjbfbvkfjgkjdhskjvfjs";
  damion();
  setTimeout(function(){title.innerHTML = "Y"}, 1000)
  setTimeout(function(){title.innerHTML = "YO"}, 2000);
  setTimeout(function(){title.innerHTML = "YOU"}, 3000);
  setTimeout(function(){title.innerHTML = "YOU C"}, 4000);
  setTimeout(function(){title.innerHTML = "YOU CA"}, 5000);
  setTimeout(function(){title.innerHTML = "YOU CAN"}, 6000);
  setTimeout(function(){title.innerHTML = "YOU CAN'T"}, 7000);
  setTimeout(function(){shocked();}, 7100);
  setTimeout(function(){damion();}, 7200);
  setTimeout(function(){shocked();}, 7300);
  setTimeout(function(){damion();}, 7400);
  setTimeout(function(){shocked();}, 7500);
  setTimeout(function(){damion();}, 7600);
  setTimeout(function(){shocked();}, 7700);
  setTimeout(function(){damion();}, 7800);
  setTimeout(function(){shocked();}, 7900);
  setTimeout(function(){title.innerHTML = "Oh my!"}, 7900);
  setTimeout(function(){title.innerHTML = "We need to do something fast!"}, 10000);
  return "LOOK UP";
}
