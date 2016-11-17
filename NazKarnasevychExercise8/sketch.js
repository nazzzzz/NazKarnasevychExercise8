var raw, joined;
var begin, end;
var ch1;


function preload(){
	raw = loadStrings("sherlock.txt");
}

function setup() {
	joined = join(raw, " ");
	begin = joined.indexOf("To Sherlock");
	end = joined.indexOf("over with you");
	var over = "over with you";
	ch1 = joined.substring(begin, end + over.length);
  
  
	console.log(ch1);
	
	var parsed = ch1.replace();
	
	console.log(parsed);

}

function draw() {
  
}