//Naz Karnasevych

var raw, joined;
var begin, end;
var ch1;
var parsed3;

function preload() {
  raw = loadStrings("sherlock.txt");
}

function setup() {
  createCanvas(600, 3000);
  background(255);
  joined = join(raw, " ");
  begin = joined.indexOf("To Sherlock");
  end = joined.indexOf("over with you");
  var over = "over with you";
  ch1 = joined.substring(begin, end + over.length);


  //console.log(ch1);

  var parsed = ch1.replace(/Sherlock/g, "Shelly");

  //console.log(parsed);

  var parsed2 = parsed.replace(/Holmes/g, "Elementary");

  parsed3 = parsed2.replace(/said he/g, "said my boy Shelly Holmes")

  console.log(parsed3);

}

function visualize(s) {
  var counter = 20;
  var counter2 = 20;
  var counter3 = 20;
  var counter4 = 20;
  var counter5 = 20;
  var counter6 = 20;
  
  var words = s.split(' ');

  for (i = 0; i < words.length; i++) {
    if (words[i] == "Shelly") {
      fill(255-counter);
      ellipse(50, counter, 20, 20);
      counter += 45;
    }
  }
  
  
  for (i = 0; i < words.length; i++) {
    if (words[i] == "the") {
      
      fill(102, 102, 255-counter2/5);
      ellipse(150, counter2, 20, 20);
      counter2 += 20;
    }
  }
  
  for (i = 0; i < words.length; i++) {
    if (words[i] == "Elementary") {
      
      fill(102, 255-counter3, 255-counter3/5);
      ellipse(250, counter3, 20, 20);
      counter3 += 45;
    }
  }
  
  for (i = 0; i < words.length; i++) {
    if (words[i] == "how") {
      
      fill(52 + counter4/10, 255-counter4/2, 10);
      ellipse(350, counter4, 20, 20);
      counter4 += 45;
    }
  }
  
  for (i = 0; i < words.length; i++) {
    if (words[i] == "deduce") {
      
      fill(250 - counter5/10, 155 +counter5/2, 100);
      ellipse(450, counter5, 20, 20);
      counter5 += 45;
    }
  }
  
  for (i = 0; i < words.length; i++) {
    if (words[i] == "she") {
      
      fill(52 + counter6/10, 100-counter6/4, 45);
      ellipse(550, counter6, 20, 20);
      counter6 += 45;
    }
  }
  




}


function draw() {
  //wanted to see how words that seem to be fairly used in detective novels match up to probably the most common word
  visualize(parsed3);
}