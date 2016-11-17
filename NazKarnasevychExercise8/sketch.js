var raw, joined;
var begin, end;
var ch1;
var parsed3;

function preload(){
	raw = loadStrings("sherlock.txt");
}

function setup() {
  createCanvas(600, 600);
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
  
  parsed3 = parsed2.replace(/said he/g, "said my boy Shelly Holmes" )
  
  //console.log(parsed3);
  
}

function visualize(s){
  var counted = [];
  var words = s.split(' ');
  
  for(i = 0; i < words.length; i++){
    if (words[i] == "Shelly" || words[i] == "Watson"){
      ellipse(mouseX, mouseY, 20, 20);
    }
  }
  
 
  
}


function draw() {
  fill(0);
    visualize(parsed3);
}

