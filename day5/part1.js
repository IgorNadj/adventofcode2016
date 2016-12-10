var md5 = require('md5');


var input = process.argv[2];
if(!input){
	console.log('usage: node '+process.argv[1]+' input');
	process.exit(1);
}


console.log('hi');
// console.log(md5('abc3231929'));

var out = '';

var i = 0;
var hits = 0;
while(hits < 8){
	var hash = md5(input+i);
	if(hash.substring(0,5) === '00000'){
		var p = hash.substring(5,6);
		console.log(i, hash, p);
		hits++;
		out += p;
	}
	i++;
}

console.log(out);